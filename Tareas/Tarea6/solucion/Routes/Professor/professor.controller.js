import express from "express";
const ProfessorRouter = express.Router();
import { ProfessorService } from "./professor.service.js";

/**
 * El controlador se utiliza para definir las rutas posibles para nuestro servicio particular,
 * define aqui las rutas para studentService, hay un ejemplo del que te puedes guiar
 */
const professorService = new ProfessorService();

// Ruta ejemplo, siempre se llama el servicio para la lógica
ProfessorRouter.get("/", async (req, res) => {
    const response = await professorService.getProfessor(req.query.id);
    res.status(response.statusCode).json(response);
});

ProfessorRouter.get("/:professorId/topic", async (req, res) => {
    const response = await professorService.getTopic(
        req.params.professorId,
        req.query.id
    );
    res.status(response.statusCode).json(response);
});

ProfessorRouter.get(
    "/:professorId/topic/:topicId/student",
    async (req, res) => {
        const response = await professorService.getStudent(
            req.params.professorId,
            req.params.topicId,
            req.query.id
        );
        res.status(response.statusCode).json(response);
    }
);

// Genera aquí las rutas faltantes

export { ProfessorRouter };
