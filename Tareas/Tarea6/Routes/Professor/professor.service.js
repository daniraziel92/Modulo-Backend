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

    //Ejemplo de servicio, usa este ejemplo para generar el resto
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
}
