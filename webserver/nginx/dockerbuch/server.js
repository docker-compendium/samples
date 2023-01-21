const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({ data: {}, error: false });
});

app.listen(3000, () => {
  console.log('API auf Port 3000')
});
