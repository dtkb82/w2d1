var requestOptions = {
	host: 'sytantris.github.io',
	path: '/http-examples/step4.html'
};

function getHTML(options, callback) {
	var https = require('https');
	var string = "";

	https.get(requestOptions, function (response) {
		//set encoding of received data to UTF-8
		response.setEncoding('utf8');

   		response.on('data', function (data) {
   			string += data;
			console.log('\n', data);
		})

		})	
};

function printHTML(html) {
	console.log('Response stream complete.');
		}


getHTML();