var http = require('http');

function httpGET(){
	var url = process.argv[2];
	http.get(url, function(response){
		//console.log("Got Response: " + response.statusCode);
		response.setEncoding('utf8');

		response.on('data', function(data){
			console.log(data);
		});

		response.on('error', function(data){
			console.error(data);
		});

	});
}

httpGET();
