"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// if i use or send to body json data then it's use it 
app.use(express_1.default.json());
// if i use to plain text of body data send of body
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
app.use('/', userRouter);
userRouter.get('/api/v1/users/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'User is created sucessfuly',
        data: user,
    });
});
app.get('/', (req, res) => {
    res.send('Hello World this is from!');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
exports.default = app;
