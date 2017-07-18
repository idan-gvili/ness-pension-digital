const express = require('express')
const app = express()  


app.get('/members/:memberid', 
  function (req, res, next ) {

    var memberid = req.params.memberid;
    //res.send(memberid);
    //res.send('./data/'+ memberid + '.json');
    var member = require('./data/'+ memberid + '.json')
    //res.setHeader('Content-Type', 'application/json')
    //res.send(member)
    res.status(200).json(member);
    res.status(403).send('ness-pension-digital no such data')
    res.status(404).send('ness-pension-digital no such data')
    res.status(500).send('ness-pension-digital no such data')
   
  }
)

var port = process.env.PORT || 1337;
app.listen(port, function () {
  console.log('Example app listening on port %d!',port)
})


