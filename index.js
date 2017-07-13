const express = require('express')
const app = express()

app.get('/', function (req, res) {
    var member = require('./member.json'); 
    res.send(member)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


