// src/app.ts

import express from "express";
import usersRoutes from "./module/user/user.routes";
import path from "path";
import { errorHandler } from "./middleware/error.middleware";

const app = express();
app.use(express.json());
app.use("/api/users", usersRoutes);

// Static files from React
const clientBuildPath = path.join(__dirname, "../client/build");
app.use(express.static(clientBuildPath));

// Catch-all to support client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

// ✅ Error middleware al final
app.use(errorHandler);

export default app;
