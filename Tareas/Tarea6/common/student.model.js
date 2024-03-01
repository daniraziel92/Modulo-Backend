/**
 * Los modelos son las clases que utilizamos para interactura con nuestros modelos de datos,
 * en este caso solo implementaremos el modelo para obtener los datos iniciales con la función get
 */
export class StudentModel {
    constructor() {
        this.menu = [
            {
                id: 1, //Numeric
                name: "Fulano", //String
                age: 19, //Numeric
                career: "Ingeniería de Sistemas", //String
                topics: [
                    {
                        id: 1,
                        name: "Calculo I",
                        teacherId: 1,
                        area: "math",
                        grades: [
                            {
                                id: 1,
                                value: 3.2,
                                date: "2023-09-01",
                                description: "exam-1",
                            },
                            {
                                id: 2,
                                value: 2.2,
                                date: "2023-08-30",
                                description: "homework-1",
                            },
                        ],
                    },
                    {
                        id: 2,
                        name: "Biología",
                        teacherId: 2,
                        area: "Ciencia",
                        grades: [
                            {
                                id: 1,
                                value: 3.2,
                                date: "2023-09-01",
                                description: "exam-1",
                            },
                            {
                                id: 2,
                                value: 4.2,
                                date: "2023-09-02",
                                description: "exam-2",
                            },
                        ],
                    },
                ],
            },
            {
                id: 2, //Numeric
                name: "Peranito", //String
                age: 18, //Numeric
                career: "Ingeniería Industrial", //String
                topics: [
                    {
                        id: 1,
                        name: "Geometría",
                        teacherId: 1,
                        area: "Math",
                        grades: [
                            {
                                id: 1,
                                value: 4.1,
                                date: "2023-09-04",
                                description: "exam-1",
                            },
                            {
                                id: 2,
                                value: 2.3,
                                date: "2023-09-05",
                                description: "workshop-1",
                            },
                        ],
                    },
                    {
                        id: 2,
                        name: "Química",
                        teacherId: 2,
                        area: "Ciencia",
                        grades: [
                            {
                                id: 1,
                                value: 3.6,
                                date: "2023-09-06",
                                description: "exam-1",
                            },
                            {
                                id: 2,
                                value: 3.9,
                                date: "2023-09-03",
                                description: "lab-1",
                            },
                        ],
                    },
                ],
            },
        ];
    }

    get() {
        return this.menu;
    }
}
