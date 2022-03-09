const express = require('express');
const app = express();
var myJson = {
    key: "myvalue"
};
var myJson2 = {
    key: "myvalue"
};
var myJson3 = {
    key: "myvalue"
};
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/rbx', function(request, response) {
	response.send(myJson);
});
app.get('/rbxplrs', function(request, response) {
	response.send(myJson2);
});
app.get('/chat', function(request, response) {
	response.send(myJson3);
});
app.post('/rbxplrs', function(request, response) {
	myJson2 = request.body;
	response.send(myJson2);
});
app.post('/chat', function(request, response) {
	myJson3 = request.body;
	response.send(myJson3);
});
app.post('/rbx', function(request, response) {
	myJson = request.body;
	response.send(myJson);
});
app.listen(process.env.PORT,function(){
	console.log("App listening on port process.env.PORT");
});
