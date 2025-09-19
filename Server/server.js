const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();



const conciertosRoutes = require('./app/routes/conciertos.routes');

const app = express();   
const PORT = process.env.PORT;


app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());

// Conexión MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error(err));
// Rutas

app.use('/concerts', conciertosRoutes);

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
