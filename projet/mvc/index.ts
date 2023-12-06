import { Request, Response } from 'express-serve-static-core';
import express from 'express';
import path from 'path';

import User from './model/User';


const port:number = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.get('/', (req: Request, res: Response) => {
  return res.render('main', { data: {
    view: "home"
  } });
});


app.get('/users', (req: Request, res: Response) => {
  User.find()
    .then((users) => {
      return res.render('main', { data : {
        json: users
      } });
    })
    .catch( (error) => {
      return res.status(500).render('main', { data: {
        error
      } });
    });
});




app.listen(port, () => {
  console.log(`🟢 MVC (${port})`);
});