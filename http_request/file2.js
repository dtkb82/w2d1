
function getAndPrintHTML() {
	var https = require('https');
	var string = "";


	var requestOptions = {
		host: 'sytantris.github.io',
		path: '/http-examples/step2.html'
	};

	https.get(requestOptions, function (response) {
		//set encoding of received data to UTF-8
		response.setEncoding('utf8');

   		response.on('data', function (data) {
   			string += data;
			console.log('\n', data);

		})	

	});
}

getAndPrintHTML();
