import express, { Request, Response } from 'express'
const app = express();
const port = 3000;


// if i use or send to body json data then it's use it 
app.use(express.json());
// if i use to plain text of body data send of body
app.use(express.text());

app.get('/', (req:Request, res: Response) => {
  res.send('Hello World this is from!');
});


app.post('/', (req: Request, res: Response) => {
 console.log(req.body);
 res.send("Hello world");
})


export default app;