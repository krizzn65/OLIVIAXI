const express = require('express');

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Main Route (Health Check)
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Sirkula API! The server is up and running.'
  });
});

// Listener
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
