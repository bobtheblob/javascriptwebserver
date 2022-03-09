const express = require('express');
const app = express()
app.get('/rbx', function(request, response) {
	response.send('Hello World!');
});
app.post('/rbx', function(request, response) {
	response.send('PUT request to homepage');
});
app.listen(process.env.PORT,function(){
	console.log("App listening on port process.env.PORT");
});
