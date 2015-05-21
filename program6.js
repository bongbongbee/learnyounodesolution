var util = require('./util.js');

function listFiles(){
	var dir = process.argv[2];
	var ext = process.argv[3];

	util(dir, ext, function(err, files){
		if(err) console.log(err);
		else{
			files.forEach(function(file){
				console.log(file);
			});
		}
	});


}

listFiles();
