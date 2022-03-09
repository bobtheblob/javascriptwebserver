const express = require('express');
const app = express()
app.get('/mytestapp', function(request, response) {
	console.log("My get function works");
    response.send('Hello World!');
});
app.listen(40379,function(){
	console.log("App listening on port 40379");
});
