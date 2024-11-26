import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"; // Para cargar variables de entorno
import usersRoutes from "./scr/rutas/Users"; // Rutas de usuarios
import loginRoutes from "./scr/rutas/Login"; // Rutas de login

dotenv.config(); // Carga las variables de entorno

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analizar JSON
app.use(express.json());

// Configuración de CORS
app.use(
  cors({
    origin: [process.env.CLIENT_URL, "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexión a MongoDB exitosa"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Rutas
app.use("/api/users", usersRoutes);
app.use("/api/auth", loginRoutes); //ruta del login

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
