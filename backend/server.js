const express = require('express');
const cors = require('cors');

require('./db');

const app = express();
app.use(cors());
app.use(express.json());

const routes = require('./routes/disasterRoutes');
app.use('/', routes);

// FIX for "Cannot GET /"
app.get('/', (req, res) => {
  res.send("Relief Tracker Backend Running ✅");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});