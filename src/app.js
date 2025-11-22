// src/app.js

const express = require('express');
const app = express();

// 1. Configuración básica
const PORT = 3000; // Puedes usar otro puerto si quieres

// 2. Ruta de prueba
app.get('/', (req, res) => {
  res.send('Hola desde mi ToDo App con Express 👋');
});

// 3. Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});