const express = require('express'); // Importamos Express
const dotenv = require('dotenv'); // Para leer las variables del archivo .env
const cors = require('cors'); // Para permitir conexiones desde el frontend
const connectDB = require('./config/database'); // Conexión a MongoDB

const productoRoutes = require('./routes/producto.routes'); // Importamos las rutas de productos

dotenv.config(); // Cargar las variables de .env

const app = express(); // Creamos la app con Express

// Conectarse a la base de datos
connectDB();

// Middlewares
app.use(cors()); // Permite que el frontend pueda comunicarse con este backend
app.use(express.json()); // Permite leer datos JSON que nos envíen
app.use(express.static('public')); // (Opcional) Servir archivos estáticos

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a EDUCAN Backend');
});

// Rutas API
app.use('/api/productos', productoRoutes); // Aquí montamos todas las rutas CRUD de productos

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});