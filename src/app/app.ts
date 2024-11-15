import express, { Request, Response } from 'express'
const app = express();
const port = 3000;


// if i use or send to body json data then it's use it 
app.use(express.json());
// if i use to plain text of body data send of body
app.use(express.text());

const userRouter = express.Router();
app.use('/', userRouter);



userRouter.get('/api/v1/users/create-user', (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true, 
    message: 'User is created sucessfuly',
    data: user,
  })
})










app.get('/', (req:Request, res: Response) => {
  res.send('Hello World this is from!');
});


app.post('/', (req: Request, res: Response) => {
 console.log(req.body);
 res.send(req.body);
})


export default app;