const http = require('http');
const concat = require('concat-stream');

function httpGET(){
	var url = process.argv[2];
	var totalData = "";

	http.get(url, function(response){
		//console.log("Got Response: " + response.statusCode);
		response.setEncoding('utf8');

		response.on('data', function(data){
			concat.write(data);
		});

		response.on('error', function(data){
			console.error(data);
		});

		response.on('end', function(data){ //can consider removing the arg since 'end' doesn't comes with data
		concat.end()
		console.log(concat);
			console.log(totalData);
		});

	});
}

httpGET();
