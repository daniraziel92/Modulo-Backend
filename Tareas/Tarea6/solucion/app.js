/**
 * Aquí importamos las rutas del router e implementamos el middleware que implementará toda la app
 */
import express from "express";
import { AppRouter } from "./Routes/router.js";

const app = express();

//Aquí deberías implementar el middleware del logger
app.use(express.json());
//Se define para las rutas el prefijo /api/V1
app.use("/api/V1", AppRouter);

export default app;
