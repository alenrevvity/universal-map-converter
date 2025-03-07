const path = require("path");
const express = require("express");

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "assets")));
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'templates'));

app.get("/", (req, res) => {
  res.render('index', { title: 'Map converter' });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
