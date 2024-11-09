import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./routes";
import morgan from "morgan";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Configura la carpeta `public` como directorio de archivos estáticos
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).send({
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error",
  });
});

export default app;
