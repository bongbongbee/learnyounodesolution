const http = require('http');
const url = require('url');

startApiServer();

function startApiServer(){
	var port = process.argv[2];
	var server = http.createServer(function(request, response){

		if(request.method === 'GET'){
			var urlParts = url.parse(request.url, true);

			switch(urlParts.pathname){
				case '/api/parsetime':
					var date = new Date(urlParts.query.iso);
					var responseString = JSON.stringify(
						{	hour: date.getHours(), 
							minute: date.getMinutes(), 
							second: date.getSeconds()
						});

					response.write(responseString);
					break;

				case '/api/unixtime':
					var date = new Date(urlParts.query.iso);
					var UTCDate = 
						Date.UTC(date.getUTCFullYear(), 
						date.getUTCMonth(), 
						date.getUTCDate(), 
						date.getUTCHours(), 
						date.getUTCMinutes(), 
						date.getUTCSeconds(), 
						date.getUTCMilliseconds()
					);

	var responseString = JSON.stringify(
			{
				unixtime: UTCDate
			});

	response.write(responseString);
	break;
			}
		}

		response.end();
	});
	server.listen(port);
}




/* var http = require('http')
   var url = require('url')

   function parsetime (time) {
   return {
hour: time.getHours(),
minute: time.getMinutes(),
second: time.getSeconds()
}
}

function unixtime (time) {
return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
var parsedUrl = url.parse(req.url, true)
var time = new Date(parsedUrl.query.iso)
var result

if (/^\/api\/parsetime/.test(req.url))
result = parsetime(time)
else if (/^\/api\/unixtime/.test(req.url))
result = unixtime(time)

if (result) {
res.writeHead(200, { 'Content-Type': 'application/json' })
res.end(JSON.stringify(result))
} else {
res.writeHead(404)
res.end()
}
})
server.listen(Number(process.argv[2]))
 */
