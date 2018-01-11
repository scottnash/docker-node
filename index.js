//Load express module with `require` directive
const express = require('express');
const app = express();
const path = require('path');


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/wwwroot/index.html'));
});

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})
