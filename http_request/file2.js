function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var filePath = process.argv.splice(2);
    filePath = filePath.toString();
  var buf = new Buffer(1024);

}