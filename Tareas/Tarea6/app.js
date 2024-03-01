/**
 * Aquí importamos las rutas del router
 */
import express from "express";
import { AppRouter } from "./Routes/router.js";

const app = express();

app.use(express.json());
app.use("/api/V1", AppRouter);

export default app;
