var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);

function getTime(date) {
    return {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
}

function getUnixTime(date) {
    return {
        unixtime: date.getTime()
    }
}

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  var route = url.parse(req.url, true)
  var date = new Date(route.query.iso)
  if (route.pathname == "/api/parsetime") {
    res.end(JSON.stringify(getTime(date)))
  }
  if (route.pathname == "/api/unixtime") {
    res.end(JSON.stringify(getUnixTime(date)))
  }
});

server.listen(port);