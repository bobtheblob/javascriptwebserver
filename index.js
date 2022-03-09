const express = require('express');
const app = express();
var myJson = {
    key: "myvalue"
};
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/rbx', function(request, response) {
	response.send(myJson);
});
app.post('/rbx', function(request, response) {
	myJson = request.body
	response.send(myJson);
});
app.listen(process.env.PORT,function(){
	console.log("App listening on port process.env.PORT");
});
