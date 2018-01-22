

var requestOptions = {
	host: 'sytantris.github.io',
	path: '/http-examples/step3.html'
};

function getAndPrintHTML2(options) {
	var https = require('https');
	var string = "";

	https.get(requestOptions, function (response) {
		//set encoding of received data to UTF-8
		response.setEncoding('utf8');

   		response.on('data', function (data) {
   			string += data;
			console.log('\n', data);

		})	

	});

}


getAndPrintHTML2();