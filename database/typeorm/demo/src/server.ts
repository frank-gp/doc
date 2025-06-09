// src/server.ts

import app from "./app";
import { AppDataSource } from "./config/data-source";

const PORT = 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Data source initialized");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ Error during data source initialization", err);
  });
