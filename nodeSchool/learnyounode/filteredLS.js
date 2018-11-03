const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const extension = "." + process.argv[3];

fs.readdir(filePath, function(err, list) {
    if (err) {
        return console.error(err);
    }
    list.forEach(function(item) {
      if (path.extname(item) == extension) {
       console.log(item);
      }
    });
  });
