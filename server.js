var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080

app.use(express.static(path.join(__dirname, 'website/static')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/website/index.html'));
});



app.listen(8080);