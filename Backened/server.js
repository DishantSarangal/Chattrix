import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const port = 3000
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(bodyParser.json())
app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Received data!')
  })
//  also installed npm i body-parser

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})