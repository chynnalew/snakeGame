const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//express framework for node.js 
//$npm install express --save
//$ node index.js (to run the code in the  browser)