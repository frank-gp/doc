import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from "./routes/routes.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
let viewsFolder = join(__dirname, "views1");
console.log(viewsFolder);

app.set("views", viewsFolder);
app.set("view engine", "ejs");

app.use(indexRoutes);

app.use(express.static(join(__dirname, "public")));

app.listen(3000);
console.info("Server http://localhost:3000");
