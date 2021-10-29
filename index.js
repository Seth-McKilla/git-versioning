import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  return res.json({
    message: "Hello there! POST to this route to add another message!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
