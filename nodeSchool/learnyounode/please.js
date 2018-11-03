const fs = require('fs');
const path = require('path');

module.exports = function(directory, extension, callback) {
  fs.readdir(directory, function(err, files) {
    if (err) return callback(err);
    var filteredFiles =  files.filter(function (file) {
      var fext = "."+ extension;
      return path.extname(file) === fext;
    });
    return callback(null, filteredFiles);
  });
}
