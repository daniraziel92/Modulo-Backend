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

    async getTopic(studentId, id) {
        let topics = this.students.filter((item) => item.id == studentId);
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

    async getGrade(studentId, topicId, id) {
        let topics = this.students.filter((item) => item.id == studentId);
        if (topics.length == 0)
            return {
                statusCode: 201,
                message: "Query executed successfully",
                data: "No results",
            };
        else topics = topics[0].topics;
        let grades = topics.filter((item) => item.id == topicId);
        console.log(grades);
        if (grades.length == 0)
            return {
                statusCode: 201,
                message: "Query executed successfully",
                data: "No results",
            };
        else grades = grades[0].grades;
        if (id) {
            grades = grades.filter((item) => item.id == id);
        }
        return {
            statusCode: 200,
            message: "Query executed successfully",
            data: grades,
        };
    }
}
