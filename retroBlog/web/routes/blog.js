// routes/blog.js
const express = require('express');
const router = express.Router();
const dataProvider = require('../dataprovider');

// Ruta para la página de inicio
router.get('/', (req, res) => {
  const entradas = dataProvider.getAllPosts();
  res.render('index', { entradas });
});

// Ruta para una entrada específica
router.get('/entrada/:id', (req, res) => {
  const entrada = dataProvider.getPostById(req.params.id);
  if (entrada) {
    res.render('entrada', { entrada });
  } else {
    res.status(404).send('Entrada no encontrada');
  }
});

module.exports = router;
