const express = require('express');
const app = express()
app.get('/rbx', function(request, response) {
	response.send('Hello World!');
});
app.post('/rbxpost', function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});
app.listen(process.env.PORT,function(){
	console.log("App listening on port process.env.PORT");
});
