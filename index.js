import express from "express";

const app = express();
const PORT = 8800;

app.listen(PORT, () => {
  console.log(`[server]: Server is running at <https://localhost>:${PORT}`);
});
