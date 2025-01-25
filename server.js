const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

app.use(history());
app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});