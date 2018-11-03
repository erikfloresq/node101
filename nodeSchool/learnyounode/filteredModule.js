const please = require('./please');

const filePath = process.argv[2];
const extension = process.argv[3];

please(filePath, extension, function(err, data) {
  if (err) return console.error(err);
  data.forEach(function (file) {
    console.log(file);
  });
});