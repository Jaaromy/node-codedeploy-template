const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, resp) => {
	resp.sendStatus(200);
});

app.get('/healthcheck', (req, resp) => {
	resp.sendStatus(200);
});

app.all('/*', (req, resp) => {
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

app.listen(3000, () => {
	console.log('Listening on port', 3000);
});
