import { Request, Response } from 'express'
import express from 'express'
import path from 'path'
import Home from './models/home'

const port = 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

app.get('/', (req: Request, res: Response) => {
    res.render('home')
})

// app.get('/', (req: Request, res: Response) => {
//     Home.find().then((nav) => {
//         res.render('nav', { nav })
//     })

// })

// app.get('/:name', (req: Request, res: Response) => {
//     res.send(`Hello ${req.params.name} !`);
// });



app.listen(port, () => {
    console.log(`serveur listen on ${port}`);
});

