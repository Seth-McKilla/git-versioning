import fs from "fs";
import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Hello there! POST to this route to add a custom message!",
  });
});

app.post("/", (req, res) => {
  const message = req.body;
  try {
    fs.writeFileSync("./db.json", JSON.stringify(message));
    return res.send("Message successfully added!");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Message failed to be added!");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
