console.log('Codigo dentro de service worker');
// console.log(self);

self.addEventListener('install', function(event) {
    console.log('serviceworker instalado', event);
  });

self.addEventListener('message', function(event){
    console.log("SW Received Message: " + event.data);
});

console.log(WebSocket);
var exampleSocket = new WebSocket("ws://www.example.com/socketserver");