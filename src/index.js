import dotenv from "dotenv";
dotenv.config();

import ConnectDB from "./db/index.js";
import app from "./app.js";

const PORT = process.env.PORT || 8000;

ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running at PORT: ${PORT}`);
    });

    // Optional: global error handler
    app.on("error", (error) => {
      console.log("❌ App encountered an error:", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection failed!!!", err);
  });
