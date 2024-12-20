const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/booking', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/booking.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
