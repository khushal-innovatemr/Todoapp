const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist/frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend is running on port ${PORT}`);
});
