import cors from "cors";
import express from "express";
import fs from "fs";

const app = express();
const port = 8000;
const logFile = "./data/log.txt";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  fs.readFile(logFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading log:", err);
      res.status(500).send("Error reading log");
    } else {
      res.send(`I'm a lumberjack and I'm okay!\n ${data}`);
    }
  });
});

app.post("/", (req, res) => {
  const data = req.body;
  const logEntry = `${JSON.stringify({
    ...data,
    dateTime: new Date().toISOString(),
  })},\n`;

  fs.appendFile(logFile, logEntry, (err) => {
    if (err) {
      console.error("Error writing to log:", err);
      res.status(500).send("Error writing to log");
    } else {
      console.log(logEntry);
      res.send("Data logged successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port}/`);
});
