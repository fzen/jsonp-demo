

var http = require('http')
var fs = require('fs')
var url = require('url')
var port = 8002

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method
console.log(pathNoQuery)
  if(pathNoQuery==='/'&&method==='GET'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`
      ${queryObject.callback}('hahahahahah')
    `)
    response.end()
  }
  else {
    response.statusCode = 404
    response.end()
  }
})

server.listen(port)
