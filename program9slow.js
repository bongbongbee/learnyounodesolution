const http = require('http');

var urls = process.argv.slice(2);
var responseData = ['','',''];
var dataCount = urls.length;

for(var i = 0; i < urls.length; i++){
	httpGET(i, urls[i]);
	//console.log(urls[i]);
}


function httpGET(index, url){

	http.get(url, function(response){
		response.setEncoding('utf8');

		response.on('data', function(data){
			responseData[index] = responseData[index].concat(data);
		});

		response.on('error', function(data){
			console.error(data);
		});

		response.on('end', function(data){ //can consider removing the arg since 'end' doesn't comes with data
			dataCount--;
			if(dataCount === 0){
				responseData.forEach(function(data){
					console.log(data);
				});
			}
		});

	});

}

