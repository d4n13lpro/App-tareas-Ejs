const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// Configuración de puerto y motor de vistas
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
app.use("/", require("./routes/index"));

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Inicio del servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor en puerto ${app.get("port")}`);
});
