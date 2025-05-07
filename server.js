const express = require('express');
const app = express();
const fs = require('fs');
const quotes = JSON.parse(fs.readFileSync('quotes.json', 'utf-8'));
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));

app.get('/api/quotes', (req, res) => {
  res.json(quotes);
});

app.get('/api/quotes/random', (req, res) => {
  const allQuotes = Object.values(quotes).flat();
  const random = allQuotes[Math.floor(Math.random() * allQuotes.length)];
  res.json(random);
});

app.get('/api/quotes/:anime', (req, res) => {
  const anime = req.params.anime;
  const result = quotes[anime];
  if (result) res.json(result);
  else res.status(404).json({ error: "Anime tidak ditemukan" });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
