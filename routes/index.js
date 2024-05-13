const express = require("express");
const router = express.Router();

let entries = [];

router.get("/", (req, res) => {
  res.render("index", {
    title: "inicio",
    entries: entries, // Pasar las entradas a la vista
  });
});

router.get("/new-entry", (req, res) => {
  res.render("new-entry", {
    title: "Nueva entrada",
  });
});

router.post("/new-entry", (req, res) => {
  console.log("Datos recibidos del cliente:", req.body); // Imprimir los datos del cliente en la consola
  if (!req.body.title || !req.body.body) {
    res.status(400).send("Entradas deben tener un titulo y un cuerpo");
  } else {
    let newEntry = {
      title: req.body.title,
      content: req.body.body.replace(/[\r\n]+/g, ""), // Eliminar \r y \n del contenido
      published: new Date().toLocaleString(), // Usar toLocaleString para mostrar la fecha y hora de manera más corta
    };

    entries.push(newEntry);
    res.redirect("/");
  }
});

module.exports = router;
