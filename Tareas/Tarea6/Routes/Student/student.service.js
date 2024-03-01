import { StudentModel } from "../../common/student.model.js";

/**
 * En el Servicio se define toda la lógica que procesa un request, validaciones
 * y procesado de datos, se tiene una función para el ejemplo
 */
export class StudentService {
    constructor() {
        const studentModel = new StudentModel();
        this.students = studentModel.get();
    }

    //Usa este ejemplo de servicio para generar el resto
    async getStudent(id) {
        let results = this.students;
        if (id) {
            results = this.students.filter((item) => item.id == id);
        }
        return {
            statusCode: 200,
            message: "Query executed successfully",
            data: results,
        };
    }
}
