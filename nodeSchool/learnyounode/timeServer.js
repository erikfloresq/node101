var net = require('net');

function addZero(number) {
  if (number < 10) {
      return '0'+number
  }
  return number
}

function now() {
    const date = new Date();
    const year = date.getFullYear();
    const month = addZero(date.getMonth()+ 1);
    const day = addZero(date.getDate());
    const hour = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    return year+'-'+month+'-'+day+' '+hour+':'+minutes
}

var server = net.createServer(function (socket) {
  socket.end(now()+'\n');
});

server.listen(Number(process.argv[2]));