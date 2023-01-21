const express = require('express');
const app = express();
app.use(express.static('files'));
app.listen(8080);

