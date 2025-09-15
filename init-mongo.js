db = db.getSiblingDB("ticketmaster");

// Crear colección de usuarios
db.createCollection("usuarios");
db.usuarios.insertMany([
  { nombre: "Alice", email: "alice@example.com" },
  { nombre: "Bob", email: "bob@example.com" },
  { nombre: "Carlos", email: "carlos@example.com" },
]);

// Crear colección de eventos
db.createCollection("eventos");
db.eventos.insertMany([
  {
    titulo: "Concierto Rock",
    fecha: new Date("2025-10-15"),
    lugar: "Madrid",
    precio: 45,
  },
  {
    titulo: "Obra de Teatro",
    fecha: new Date("2025-11-02"),
    lugar: "Barcelona",
    precio: 30,
  },
  {
    titulo: "Festival Jazz",
    fecha: new Date("2025-12-01"),
    lugar: "Valencia",
    precio: 50,
  },
]);