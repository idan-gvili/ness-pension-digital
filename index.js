const express = require('express')
const app = express()

app.get('/members/:memberid', function (req, res) {
    var memberid = req.params.memberid;
    res.setHeader('Content-Type', 'application/json')
    //res.send(memberid);
    //res.send('./data/'+ memberid + '.json');
    var member = require('./data/'+ memberid + '.json')
    res.send(member)
})

var port = process.env.PORT || 1337;
app.listen(port, function () {
  console.log('Example app listening on port %d!',port)
})


