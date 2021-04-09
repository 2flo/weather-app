//var http = require('http-signature');
var url = 'https://api.openweathermap.org/data/2.5/weather?q=Lens&units=metric&lang=FR&appid=652be37c6135ed27ef8faa0d818e900c';
var request = new XMLHttpRequest();
//var server = http.createServer(function ( request, response ) {
// All logic will go here
request.open('GET', url);
request.responseType = 'json';
request.send(./index.html);
request.onload = function(){
  var weather = request.response;
  infoHeader(weather);
  showWeather(weather);
}

function infoHeader(jsonObj){
  var h1 = document.createElement('h1');
  h1.textContent = jsonObj['name'];
  body.appendChild(h1);
  console.log(h1);
}
//request( url , function(err, res, body) {
//var data = JSON.parse(body);
//response.write("<html><body><div id='container'>");
//response.write("<h1>"+'City Name : '+ data['name'] + '<br>'+ "</h1>");
//response.write("<h2>"+'Temperature : '+ data.main['temp'] + '<br>'+ "</h2>");
//response.write("<h2>"+'Sunset Time : '+ new Date(data.sys['sunset']*1000) + '<br>'+ "</h2>");
//response.write("</div></body></html>");
//response.end();
//});
//}).listen(8081);
