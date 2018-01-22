var https = require('https');

module.exports = function getHTML(options, callback) {
	var https = require('https');
	var string = "";

	https.get(options, function (response) {
		//set encoding of received data to UTF-8
		response.setEncoding('utf8');

   		response.on('data', function (data) {
   			string += data;
			callback(string);
		})

	})	
};
