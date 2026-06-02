import express from "express";

const app = express();

const PORT = process.env.PORT || 8085;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from GitHub Actions CI"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});