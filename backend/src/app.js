import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.send("Backend COLOBRAS funcionando");
});

app.use("/api/contact", contactRoutes);

app.use((req, res) => {
  res.status(404).json({
    ok: false,
    message: "Ruta no encontrada.",
  });
});

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;

  console.error(error);

  res.status(statusCode).json({
    ok: false,
    message:
      statusCode === 500
        ? "Error interno del servidor."
        : error.message || "Ocurrió un error.",
  });
});

export default app;
