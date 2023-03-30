const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
var cors = require('cors')
const bodyParser = require("body-parser");

const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('uploads/', express.static('uploads'))
app.use('/api/form', require('./routes/form'))
app.use('/api/clientform', require('./routes/clientform'))

app.listen(port, () => {
  console.log(`Praukcy backend listening at http://localhost:${port}`)
})