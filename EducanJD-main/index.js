const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.send('Servidor Node (Educan) funcionando desde index.js');
});

// Ruta API de ejemplo
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde Educan API' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
