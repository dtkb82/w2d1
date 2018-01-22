var getHTML = require('./http-functions');

var requestOptions = {
  	  host: 'sytantris.github.io',
  	  path: '/http-examples/step6/uppercase.html'
	};

function printHTML(html) {
	var upper = html.toUpperCase();
	console.log(upper);
}

getHTML(requestOptions, printHTML);