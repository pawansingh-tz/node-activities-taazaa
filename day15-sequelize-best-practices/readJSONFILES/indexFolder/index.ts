import express from "express";
import fs from "fs";
import path from "path";
import { runWorkers } from "./workerPool.js";

const app = express();
const PORT = 3000;

app.get("/read-json", async (_req, res) => {
  try {
    const jsonDir = path.join(__dirname, "../json");
    const files = fs
      .readdirSync(jsonDir)
      .filter((f) => f.endsWith(".json"));

    const data = await runWorkers(files, 4);

    res.json({
      filesRead: files.length,
      records: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
