const express = require('express');
const path = require('path');

const app = express();
const port = 5002;

// Servir archivos estáticos como el HTML y la imagen
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal que devuelve el archivo index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});