var fs = require('fs');
var path = require('path');
var listOfFiles = undefined;

function listFiles(){
	var file = process.argv[2];
	var ext = process.argv[3];

	fs.readdir(file, function(err, files){
		files.forEach(function(file){
			if(path.extname(file) === '.' + ext){
				console.log(file);
			}
		});

	});

}



listFiles();

