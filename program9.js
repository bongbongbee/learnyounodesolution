const http = require('http');
const bl = require('bl')

var urls = process.argv.slice(2);
var responseDataArray = new Array(urls.length);
var dataCount = urls.length;

for(var i = 0; i < urls.length; i++){
	httpGET(i, urls[i]);
	//console.log(urls[i]);
}


function httpGET(index, url){
	var responseData = "";

	http.get(url, function(response){

		response.on('data', function(data){
			responseData += data;
		});

		response.on('error', function(data){
			console.error(data);
		});

		response.on('end', function(data){ //can consider removing the arg since 'end' doesn't comes with data
			responseDataArray[index] = responseData.toString();
			dataCount--;
			if(dataCount === 0){
				responseDataArray.forEach(function(data){
					console.log(data);
				});
			}
		});

	});

}

