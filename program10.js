const net = require('net');
const date = new Date();
var port = process.argv[2];

const server = net.createServer(function(socket){
	//socket stuff
	//console.log("Current Port: "+port);
	//console.log(getDateAndTime());
	socket.write(getDateAndTime());
	socket.end();

	//or alternatively we can use socket.end(data)
});
server.listen(port);


function getDateAndTime(){
	var dash = '-';

	return date.getFullYear()
		+ dash + zeroFill(date.getMonth()+1)
		+ dash + zeroFill(date.getDate())
		+ ' ' + zeroFill(date.getHours()) + ':' + zeroFill(date.getMinutes()) + '\n' ;
}

function zeroFill(value){
	value = value.toString();
	if(value.length > 1){
		return value;
	}

	return '0' + value;
}

//official solution
/*var net = require('net')

  function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
  }

  function now () {
  var d = new Date()
  return d.getFullYear() + '-'
  + zeroFill(d.getMonth() + 1) + '-'
  + zeroFill(d.getDate()) + ' '
  + zeroFill(d.getHours()) + ':'
  + zeroFill(d.getMinutes())
  }

  var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
  })

  server.listen(Number(process.argv[2]))
 */
