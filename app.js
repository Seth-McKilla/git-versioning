import fs from "fs";
import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  try {
    const note = fs.readFileSync("./db.json");
    res.json(JSON.parse(note));
  } catch (error) {
    console.log(error);
    return res.status(500).send("Failed to read custom message!");
  }
});

app.post("/", (req, res) => {
  try {
    fs.writeFileSync("./db.json", JSON.stringify(req.body));
    return res.status(201).send(req.body);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Message failed to be added!");
  }
});

app.delete("/", (req, res) => {
  try {
    fs.writeFileSync("./db.json", JSON.stringify({ message: "" }));
    return res.send("Successfully deleted message!");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Failed to delete message!");
  }
});

export default app;
