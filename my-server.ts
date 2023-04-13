import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT ?? 8000;

// Define GET endpoint(s)
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

const words = ['apple', 'banana', 'cherry', 'grape', 'lemon'];

app.get('/path/goes/here', (req, res) => {
    const response = { secret: "" };
    res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});