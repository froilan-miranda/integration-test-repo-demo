"use strict";

module.exports = (app)=> {
	console.log("webhook is running...");
	app.post('./webhook',(req, res)=> {
		console.log("Activate webhook");
		console.log(req.body);
		res.status(200).send();
	})
}
