const csv = require('csv-parser')
const fs = require('fs')



const express = require('express')
const app = express()
const port = 3001

var cors = require('cors');
        app.use(cors())

app.get('/getData', (req, res) => {
  const results = [];
  fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    res.send(results)
    console.log(results)

  });
  
  
  
  //res.send(results)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
