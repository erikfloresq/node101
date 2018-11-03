const http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function(response) {
  response.setEncoding('utf8');
  response.pipe(bl(function(err, data){
    const dataRecive = data.toString();
    console.log(dataRecive.length);
    console.log(dataRecive);
  }));
});