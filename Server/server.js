const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

// Importar rutas
const usuarioRoutes = require('./app/routes/usuarios.routes');
const conciertosRoutes = require('./app/routes/conciertos.routes');

const app = express();   // ✅ primero declaramos la app
const PORT = 8080;

// Habilita CORS solo para Angular (ejemplo: http://localhost:4200)
app.use(cors({
  origin: "http://localhost:4200", // tu frontend Angular
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Middleware
app.use(express.json());

// Conexión MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/miapp')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error(err));

// Rutas
app.use('/usuarios', usuarioRoutes);
app.use('/concerts', conciertosRoutes);

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
