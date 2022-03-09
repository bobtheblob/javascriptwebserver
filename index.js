const express = require('express');
const app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/rbx', function(request, response) {
	response.send('Hello World!');
});
app.post('/rbx', function(request, response) {
	console.log(request.body.Hello);
	response.send(request.body.Hello);
});
app.listen(process.env.PORT,function(){
	console.log("App listening on port process.env.PORT");
});
