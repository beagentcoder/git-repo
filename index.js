import express from "express"
import bodyParser from "body-parser";
import cors from 'cors'
import gitRouter from "./src/features/git-repo/git.routes.js"

const port =3200
const app =express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api/git-repo',gitRouter)
app.get('/',(req,res)=>{
    res.send('Api Usage /api/git-repo/?username="USERNAME"')
})


app.use((req,res)=>{
    res.status(404).json({message: "API not found"})
  })
  
  app.listen(port, () => console.log(` listening on port ${port}!`));
