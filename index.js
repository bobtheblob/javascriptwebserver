const express = require('express');
const app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/rbx', function(request, response) {
	response.send('Hello World!');
});
app.post('/rbx', function(request, response) {
	console.log(response.body);
	response.send('PUT request to homepage');
});
app.listen(process.env.PORT,function(){
	console.log("App listening on port process.env.PORT");
});
