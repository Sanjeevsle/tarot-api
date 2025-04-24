const express = require('express');
const app = express();

// Example tarot data (replace with your actual data)
const cards = [
  { id: 1, name: 'The Fool', meaning: 'New beginnings', image: 'url_here' },
  { id: 2, name: 'The Magician', meaning: 'Manifestation', image: 'url_here' },
];

// Get all cards
app.get('/cards', (req, res) => {
  res.json(cards);
});

// Get specific card by ID
app.get('/cards/:id', (req, res) => {
  const card = cards.find(c => c.id === parseInt(req.params.id));
  if (card) {
    res.json(card);
  } else {
    res.status(404).json({ error: 'Card not found' });
  }
});

module.exports = app;
