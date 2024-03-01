import express from "express";
import { ProfessorRouter } from "./Professor/professor.controller.js";
import { StudentRouter } from "./Student/student.controller.js";
const AppRouter = express.Router();

/**
 * En el router se definen las rutas para cada controlador y se exporta al final para usarse en la app
 */
AppRouter.use("/professor", ProfessorRouter);
AppRouter.use("/student", StudentRouter);

export { AppRouter };
