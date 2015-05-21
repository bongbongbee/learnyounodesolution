const http = require('http');

function startHTTP(){
	var port = process.argv[2];

	var server = http.createServer(function(request, response){

		var body = "";
		switch(request.method){

			case 'POST':

				request.setEncoding('utf8');

				request.on('data', function(data){
					response.write(data.toUpperCase());
				});

				request.on('end', function(){
					response.end();
				});


				break;

			case 'GET':
				break;

		}

	});

	server.listen(port);

}

startHTTP();
/* var http = require('http')
   var map = require('through2-map')

   var server = http.createServer(function (req, res) {
   if (req.method != 'POST')
   return res.end('send me a POST\n')

   req.pipe(map(function (chunk) {
   return chunk.toString().toUpperCase()
   })).pipe(res)
   })

   server.listen(Number(process.argv[2]))
 */
