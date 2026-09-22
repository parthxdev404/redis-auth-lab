import express from "express";

const app = express();

app.use(express.json());

app.use("/health", (_req, res) => {
  res.send("Server is healthy");
});

export default app;
