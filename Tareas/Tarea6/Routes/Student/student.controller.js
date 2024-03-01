import express from "express";
const StudentRouter = express.Router();
import { StudentService } from "./student.service.js";

/**
 * El controlador se utiliza para definir las rutas posibles para nuestro servicio particular,
 * define aqui las rutas para studentService, hay un ejemplo del que te puedes guiar
 */
const studentService = new StudentService();

// Ruta ejemplo, siempre se llama el servicio para la lógica
StudentRouter.get("/", async (req, res) => {
    const response = await studentService.getStudent(req.query.id);
    res.status(response.statusCode).json(response);
});

// Genera aquí las rutas faltantes

export { StudentRouter };
