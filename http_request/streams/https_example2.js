
// while https is built-in to Node, it is a module, so it must be required


// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path


function getAndPrintHTMLChunks() {
	var https = require('https');

	var requestOptions = {
		host: 'sytantris.github.io',
		path: '/http-examples/step1.html'
	};

	https.get(requestOptions, function (response) {
		//set encoding of received data to UTF-8
		response.setEncoding('utf8');

   		response.on('data', function (data) {
			console.log('Chunk Received. Length:', data.length + '\n');

		})

    	response.on('end', function() {
			console.log('Response stream complete.');
		});
	

	});
}

getAndPrintHTMLChunks();



// console.log("I'm about to make the request!");

// https.request(requestOptions, callback).end();

// console.log("I've made the request!");



