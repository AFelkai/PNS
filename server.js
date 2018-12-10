'use strict';

const express = require('express');
const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
app.get('/', (req, res) => {
  res.send('Hello world\n');
});


app.listen(PORT, () => {
	console.log(`Running on http://${HOST}:${PORT}`);	
} );

