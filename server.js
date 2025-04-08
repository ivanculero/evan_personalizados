const express = require('express');
const path = require('path');

const app = express();
const port = 3000; 

// Define la ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Especifica la carpeta pública para servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});