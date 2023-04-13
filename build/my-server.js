"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
// Define GET endpoint(s)
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});
const words = ["beach", "hello", "child", "mango", "kiwis", "apple", "grape", "fluff", "spoon", "canny"];
app.get("/lauren", (0, cors_1.default)(), (req, res) => {
    const word = words[Math.floor(Math.random() * words.length)];
    const secretWord = { secret: word };
    res.json(secretWord);
});
