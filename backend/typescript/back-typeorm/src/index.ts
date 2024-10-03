import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path"; // Importar path para manejar rutas del sistema de archivos
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import { User } from "./entity/User";

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // Configurar para servir archivos estáticos desde la carpeta "dist", que está dos niveles arriba
    app.use(express.static(path.join(__dirname, '..', '..', 'front', 'dist')));

    // Ruta de fallback: sirve "index.html" que está en "dist"
    app.get('*', (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, '..', '..', 'front', 'dist', 'index.html'));
    });

    // start express server
    app.listen(3000, () => {
        console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");
    });

    // insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "Timber",
            lastName: "Saw",
            age: 27
        })
    );

    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "Phantom",
            lastName: "Assassin",
            age: 24
        })
    );

}).catch(error => console.log(error));
