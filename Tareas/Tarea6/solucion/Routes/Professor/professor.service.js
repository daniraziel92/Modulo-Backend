import { ProfessorModel } from "../../common/professor.model.js";

/**
 * En el Servicio se define toda la lógica que procesa un request, validaciones
 * y procesado de datos, se tiene una función para el ejemplo
 */
export class ProfessorService {
    constructor() {
        const professorModel = new ProfessorModel();
        this.professors = professorModel.get();
    }

    async getProfessor(id) {
        let results = this.professors;
        if (id) {
            results = this.professors.filter((item) => item.id == id);
        }
        return {
            statusCode: 200,
            message: "Query executed successfully",
            data: results,
        };
    }

    async getTopic(professorId, id) {
        let topics = this.professors.filter((item) => item.id == professorId);
        if (topics.length == 0)
            return {
                statusCode: 201,
                message: "Query executed successfully",
                data: "No results",
            };
        else topics = topics[0].topics;
        if (id) {
            topics = topics.filter((item) => item.id == id);
        }
        return {
            statusCode: 200,
            message: "Query executed successfully",
            data: topics,
        };
    }

    async getStudent(professorId, topicId, id) {
        let topics = this.professors.filter((item) => item.id == professorId);
        if (topics.length == 0)
            return {
                statusCode: 201,
                message: "Query executed successfully",
                data: "No results",
            };
        else topics = topics[0].topics;
        let students = topics.filter((item) => item.id == topicId);
        if (students.length == 0)
            return {
                statusCode: 201,
                message: "Query executed successfully",
                data: "No results",
            };
        else students = students[0].students;
        if (id) {
            students = students.filter((item) => item.id == id);
        }
        return {
            statusCode: 200,
            message: "Query executed successfully",
            data: students,
        };
    }
}
