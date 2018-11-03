const http = require('http');
var bl = require('bl');

var serverData = [];
var count = 0;

function printResults() {
  for (var i = 0; i < 3; i++) {
    console.log(serverData[i]);
  }  
}

function httpGet(index){
    http.get(process.argv[2 + index], function(response) {
        response.setEncoding('utf8');
        response.pipe(bl(function(err, data){
          if (err) {
            return console.error(err);
          }
          serverData[index] = data.toString();
          count++;
          if (count === 3) {
            printResults()
          }
        }));
      });
}

for (var i = 0; i < 3; i++) {
  httpGet(i);
}