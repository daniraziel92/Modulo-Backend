import app from "../app";
import request from "supertest";

describe("StudentService", () => {
    describe("#getStudent", () => {
        it("Should return the array of students", async () => {
            const response = await request(app).get("/api/v1/student");
            expect(response.body.data).toEqual([
                {
                    id: 1,
                    name: "Fulano",
                    age: 19,
                    career: "Ingeniería de Sistemas",
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
                    id: 2,
                    name: "Peranito",
                    age: 18,
                    career: "Ingeniería Industrial",
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
            ]);
        });

        it("Should filter by id if given", async () => {
            const response = await request(app).get("/api/v1/student?id=1");
            expect(response.body.data).toEqual([
                {
                    id: 1,
                    name: "Fulano",
                    age: 19,
                    career: "Ingeniería de Sistemas",
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
            ]);
        });
    });

    describe("#getTopic", () => {
        it("Should return the array of student's topics", async () => {
            const response = await request(app).get("/api/v1/student/1/topic");
            expect(response.body.data).toEqual([
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
            ]);
        });

        it("Should filter by id if given", async () => {
            const response = await request(app).get(
                "/api/v1/student/1/topic?id=2"
            );
            expect(response.body.data).toEqual([
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
            ]);
        });
    });

    describe("#getGrade", () => {
        it("Should return the array of student's topics's grades", async () => {
            const response = await request(app).get(
                "/api/v1/student/1/topic/2/grade"
            );
            expect(response.body.data).toEqual([
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
            ]);
        });

        it("Should filter by id if given", async () => {
            const response = await request(app).get(
                "/api/v1/student/1/topic/2/grade?id=2"
            );
            expect(response.body.data).toEqual([
                {
                    id: 2,
                    value: 4.2,
                    date: "2023-09-02",
                    description: "exam-2",
                },
            ]);
        });
    });
});
