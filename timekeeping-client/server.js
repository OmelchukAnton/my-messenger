const express = require('express');
const app = express();

function middlewareExample(req, res, next) {
    console.log(req.path)
    next()
}

app.use(middlewareExample)

app.get('/about', (req, res, next) => {
    res.send('about')
})

app.get('/contact', (req, res, next) => {
    res.send('CONTAACT')
})

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
