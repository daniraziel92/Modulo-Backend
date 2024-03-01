/**
 * Los modelos son las clases que utilizamos para interactura con nuestros modelos de datos,
 * en este caso solo implementaremos el modelo para obtener los datos iniciales con la función get
 */
export class ProfessorModel {
    constructor() {
        this.menu = [
            {
                id: 1, //Numeric
                name: "Sultano", //String
                age: 45, //Numeric
                document: "1233123", //String
                topics: [
                    {
                        id: 1,
                        name: "Calculo I",
                        area: "math",
                        students: [{ id: 1, misses: 3, active: true }],
                    },
                    {
                        id: 2,
                        name: "Geometría",
                        area: "math",
                        students: [{ id: 2, misses: 2, active: true }],
                    },
                ],
            },
            {
                id: 2, //Numeric
                name: "Mendano", //String
                age: 51, //Numeric
                document: "32131", //String
                topics: [
                    {
                        id: 1,
                        name: "Biología",
                        area: "Ciencia",
                        students: [{ id: 1, misses: 3, active: true }],
                    },
                    {
                        id: 2,
                        name: "Química",
                        area: "Ciencia",
                        students: [{ id: 2, misses: 3, active: true }],
                    },
                ],
            },
        ];
    }

    get() {
        return this.menu;
    }
}
