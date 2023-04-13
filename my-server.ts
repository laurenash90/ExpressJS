import express, { Application, Request, Response } from 'express';
import cors from "cors"
const app: Application = express();
const PORT = process.env.PORT ?? 8000;

// Define GET endpoint(s)
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});

const words = ["beach", "hello", "child", "mango", "kiwis", "apple", "grape", "fluff", "spoon", "canny"];
app.get("/lauren", cors(), (req: Request, res: Response) => {
    const word = words[Math.floor(Math.random() * words.length)];
    const secretWord = { secret: word };
    res.json(secretWord);
});

