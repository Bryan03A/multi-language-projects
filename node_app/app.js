const express = require('express');
const path = require('path');

const app = express();
const port = 5002;

// Serve static files like HTML and image
app.use(express.static(path.join(__dirname, 'public')));

// Main route that returns the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
