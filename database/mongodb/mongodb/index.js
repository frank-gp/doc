const connectMongoDB = require("./config/mongodb");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const http = require("http");

require("dotenv").config({ path: "./.env.private" });

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const startServer = async () => {
  try {
    await connectMongoDB();
    server.listen(3610, () => {
      console.log(`listening on http://localhost:3000/`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

startServer();

const apiRouter = express.Router();

apiRouter.use("/", require("./module"));
app.use("/api", apiRouter);

app.use("/", express.static("public"));
