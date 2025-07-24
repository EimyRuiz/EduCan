const express = require('express'); // Importamos Express
const dotenv = require('dotenv'); // Para leer las variables del archivo .env
const cors = require('cors'); // Para permitir conexiones desde el frontend
const connectDB = require('./config/database'); // Conexión a MongoDB

dotenv.config(); // Cargar las variables de .env

const app = express(); // Creamos la app con Express

// Conectarse a la base de datos
connectDB();

// Middlewares: cosas que Express usa
app.use(cors()); // Permite que el frontend pueda comunicarse con este backend
app.use(express.json()); // Permite leer datos JSON que nos envíen
app.use(express.static('public')); // (Opcional) Servir archivos de la carpeta "public" si tienes algo allí

const PORT = process.env.PORT || 3000; // Tomamos el puerto desde el .env o usamos 3000

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a EDUCAN Backend'); // Muestra este mensaje al ir a http://localhost:3000
});

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

