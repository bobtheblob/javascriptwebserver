const express = require('express');
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
var myJson = {
    key: "myvalue"
};
var myJson2 = {
    key: "myvalue"
};

app.get('/rbx', function(request, response) {
	response.send(myJson);
});
app.get('/rbxplrs', function(request, response) {
	response.send(myJson2);
});
app.post('/rbxplrs', function(request, response) {
	myJson2 = request.body;
});
app.post('/rbx', function(request, response) {
	myJson = request.body;
});
app.listen(process.env.PORT,function(){
	console.log("App listening on port process.env.PORT");
});
