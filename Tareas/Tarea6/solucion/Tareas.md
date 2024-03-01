# Tareas del modulo

Para la retroalimentación de esta tarea puedes utilizar como guía final el proyecto en la carpeta solución o en caso de no saber como continuar también puedes guiarte de la solución.

Para esta tarea se desarrollaron pruebas, sin embargo puedes guiarte de la solución si te atascas o para guiarte con la estructura del proyecto pues se utiliza una estructura de express avanzada que no hemos visto, igualmente se cuentan con guías en los archivos iniciales de la tarea.

## Tareas

-   Desarrolla un servidor de express para manejar un API de una universidad, este API debe tener rutas para consultar para un estudiante las materias y para las materias las notas. Para el caso de los profesores debe tener para consultar las materias que da este profesor, miremos los modelos de datos

> Para generar el UUID se recomienda utilizar la librería `uuid`

### Estudiante

```js
    {
        id: 1,//Numeric
        name: "Fulano", //String
        age: 19, //Numeric
        career: "Ingeniería de Sistemas", //String
        topics: [{name: "Calculo I", teacherId: 1, area: "math", grades: [{id: 1, value: 3.2, date: '2023-09-01', description: "exam-1"}]}]
    }
```

### Profesor

```js
    {
        id: 1,//Numeric
        name: "Sultano", //String
        age: 45, //Numeric
        document: "1233123", //String
        topics: [{name: "Calculo I", area: "math", students: [{id: 1, misses: 3, active: true}]}] ,
    }
```

-   Como se evidencia, las estructuras son parecidas pero diferentes, para cada modelo debes generar rutas de la siguiente manera
    -   **student** con query param `id` para obtener un student en particular o todos, por ejemplo, para obtenerlos todos sería /student, para obtener uno en particular sería `/student?id=13213`
    -   **student/:studentId/topic** para obtener las materias de un estudiante en particular, debe permitir el query param `id` para obtener una materia en particular por ejemplo `student/123/topic?id=3`
    -   **student/:studentId/topic/:topicId/grade** para obtener las notas de una materia, para obtener una nota en particular debe permitir el query param `id`, por ejemplo `student/:studentId/topic/:topicId/grade?id=34`
    -   **professor** con query param `id` para obtener un profesor en particular o todos, por ejemplo, para obtenerlos todos sería /professor, para obtener uno en particular sería `/professor?id=13213`
    -   **professor/:professorId/topic** para obtener las materias de un profesor en particular, debe permitir el query param `id` para obtener una materia en particular por ejemplo `professor/123/topic/id=3`
    -   **professor/:professorId/topic/:topicId/student** para obtener las notas de una materia, para obtener una nota en particular debe permitir el query param `id`, por ejemplo `professor/:professorId/topic/:topicId/student?id=34`
-   Debes implementar el scaffolding sugerido y pasar todos los tests
