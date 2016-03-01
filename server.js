var express = require('express');
var app = express();

app.get('/api/whoami', function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
        'ipaddress': req.headers['x-forwarded-for'],
        'software': /.*\((.*)\).*/.exec(req.headers['user-agent'])[1],
        'language': req.headers['accept-language'].split(',')[0]
    }));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("start server at port " + port);
});