import app from "./app.js";
import { PORT } from "./config.js";


app.listen(PORT);
console.log("http://localhost:" + PORT);
