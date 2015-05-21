var fs = require('fs');
var total = 0;


function countLine(callback){
	fs.readFile(process.argv[2], 'utf8', function(err, data){
		total = data.split('\n').length-1;
		callback();

	});
}

function printer(){
	console.log(total);	
	}

countLine(printer);
