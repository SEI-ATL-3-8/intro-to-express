const express = require('express')
const app = express()

const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use(express.json())

app.get('/puppies', (req, res) => {
  res.send('hello from GET /puppies!')
})

app.get('/puppiezzzz', (req, res) => {
  res.send('hello from GET /puppiezzzz!')
})

app.post('/puppies', (req, res) => {
  console.log(req.body);
  res.send('hello from POST /puppies!')
})

app.put('/puppies', (req, res) => {
  res.send('hello from PUT /puppies!')
})

app.delete('/puppies', (req, res) => {
  res.send('hello from DELETE /puppies!')
})

app.listen(3000, () => {
  console.log('server listening!');
  routesReport.print()
})



