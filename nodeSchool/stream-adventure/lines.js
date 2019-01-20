var split= require('split');
var through = require('through2');
var stream = through(write, end);
var lineCount = 0;

function write(buffer, _, next) {
    var line = buffer.toString();
    if (lineCount % 2 === 0) {
        this.push(line.toLowerCase() + '\n');
    } else {
        this.push(line.toUpperCase()+ '\n');
    }
    lineCount++;
    next();
}

function end(done) {
    done();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout)