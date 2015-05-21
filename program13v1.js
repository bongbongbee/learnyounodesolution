const http = require('http');
const url = require('url');

function startHTTP(){
	var port = process.argv[2];

	var server = http.createServer(function(request, response){
		var body = "";
		if(request.method === 'POST'){

			/*			request.setEncoding('utf8');

						request.on('data', function(data){
						response.write(data.toUpperCase());
						});

						request.on('end', function(){
						response.end();
						});


						break;*/

		}else if(request.method === 'GET'){
			console.log(url.parse(request.url, true).pathname.toLowerCase());
			//response.writeHead(200, {'Content-Type': 'application/json'});

			switch (request.url){
			  case '/api/parsetime':
			  console.log("parsetime!");
			  break;

			  case '/api/unixtime':
			  console.log("unixtime!");
			  break;
			  }
		}

		response.end();

		server.listen(port);
	});
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
