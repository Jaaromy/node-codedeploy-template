const express = require('express');
const app = express();

// Static pages will be served when root URI is requested
app.use(express.static('public'));

// All get requests other than root
app.get('/*', (req, resp) => {
	resp
		.status(200)
		.send(`
						<!DOCTYPE html>
						<html>
						<head>
						<title>My Web App</title>
						</head>
						<body>
						<h1>It worked! Yay!</h1>
						<h2>This is dynamically generated.</h2>
						<h2>Your path was: <code>${req.url}</code>
						</h2>
						<body>
						</html>
					`);
});

// Catch all other requests
app.all('/*', (req, resp) => {
	resp
		.status(404)
		.send('Request type not supported.');
});

app.listen(3000, () => {
	console.log('Listening on port', 3000);
});
