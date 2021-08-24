const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express()
app.use(cors())
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//cors api
// app.get('/todays-price', (req, res) => {
//     // console.log('asdf');
//      fetch('https://nepse-data-api.herokuapp.com/data/todaysprice').then(res => res.json()).then(text => {
//          res.json(text);
//      }).catch(err => {
//          res.status(400).send('failed to fetch');
//      });
//  });
 

app.listen(port, () => {
  console.log(`Server app listening at ${port}`)
})