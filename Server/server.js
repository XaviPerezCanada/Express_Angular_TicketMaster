const express = require('express');
const mongoose = require('mongoose');
const usuarioRoutes = require('./app/routes/usuarios.routes');

const cors = require("cors");

const app = express();

// Habilita CORS solo para Angular (ejemplo: http://localhost:4200)
app.use(cors({
  origin: "http://localhost:4200", // tu frontend de Angular
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true // si usas cookies o autenticación
}));

const PORT = 8080;

// Middleware
app.use(express.json());

// Conexión MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/miapp')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error(err));

// Rutas
app.use('/', usuarioRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
