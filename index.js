const express = require('express')
const app = express()

app.get('/', function (req, res) {
    var member = require('./member.json')
    res.setHeader('Content-Type', 'application/json')
    res.send(member)
})

var port = process.env.PORT || 1337;
app.listen(port, function () {
  console.log('Example app listening on port %d!',port)
})


