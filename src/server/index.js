import express from 'express';
import path from 'path';
let app = express();

let port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home' });
});

app.listen(port, () => {
  console.log('Listening on port:', port);
});
