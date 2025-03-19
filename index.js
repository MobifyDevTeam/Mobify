const express = require('express');
const fs = require('fs').promises;  
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use('/img', express.static('img'));
app.use('/css', express.static('css'));


app.get('/', async (req, res) => {
  try {
    const content = await fs.readFile(( './html/home.html'), 'utf-8');
    res.send(content);
  } catch (err) {
    res.status(500).send('Error en Home.');
  }
});


app.get('/introduccion', async (req, res) => {
  try {
    const content = await fs.readFile(('./html/introduccion.html'), 'utf-8');
    res.send(content);
  } catch (err) {
    res.status(500).send('Error en Introduccion.');
  }
});

app.get('/misionvision', async (req, res) => {
    try {
      const content = await fs.readFile(('./html/misionvision.html'), 'utf-8');
      res.send(content);
    } catch (err) {
      res.status(500).send('Error en Introduccion.');
    }
});
  
app.get('/introduccion', async (req, res) => {
    try {
      const content = await fs.readFile(('./html/introduccion.html'), 'utf-8');
      res.send(content);
    } catch (err) {
      res.status(500).send('Error en Introduccion.');
    }
});
  
app.get('/objetivos', async (req, res) => {
    try {
      const content = await fs.readFile(('./html/objetivos.html'), 'utf-8');
      res.send(content);
    } catch (err) {
      res.status(500).send('Error en Introduccion.');
    }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});