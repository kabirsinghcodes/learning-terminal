// Import dependencies
const express = require('express');
const cors = require('cors');
const path = require('path');
const ttydRouter = require('./routes/ttydRouter');

// Create a new express application named 'app'
const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 8080;

// Parsing json/application
app.use(cors());
app.use(express.json());

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
});

// server-side rendering ~ no?
//app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/ttyd', ttydRouter);

// Catch any bad requests
app.get('*', (req, res) => {
  res.status(200).json({
    msg: 'Catch All',
  });
});

// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));
