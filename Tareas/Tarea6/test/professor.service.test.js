import app from "../app";
import request from "supertest";

describe("ProfessorService", () => {
    describe("#getProfessor", () => {
        it("Should return the array of professors", async () => {
            const response = await request(app).get("/api/v1/professor");
            expect(response.body.data).toEqual([
                {
                    id: 1,
                    name: "Sultano",
                    age: 45,
                    document: "1233123",
                    topics: [
                        {
                            id: 1,
                            name: "Calculo I",
                            area: "math",
                            students: [
                                {
                                    id: 1,
                                    misses: 3,
                                    active: true,
                                },
                            ],
                        },
                        {
                            id: 2,
                            name: "Geometría",
                            area: "math",
                            students: [
                                {
                                    id: 2,
                                    misses: 2,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Mendano",
                    age: 51,
                    document: "32131",
                    topics: [
                        {
                            id: 1,
                            name: "Biología",
                            area: "Ciencia",
                            students: [
                                {
                                    id: 1,
                                    misses: 3,
                                    active: true,
                                },
                            ],
                        },
                        {
                            id: 2,
                            name: "Química",
                            area: "Ciencia",
                            students: [
                                {
                                    id: 2,
                                    misses: 3,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
            ]);
        });

        it("Should filter by id if given", async () => {
            const response = await request(app).get("/api/v1/professor?id=1");
            expect(response.body.data).toEqual([
                {
                    id: 1,
                    name: "Sultano",
                    age: 45,
                    document: "1233123",
                    topics: [
                        {
                            id: 1,
                            name: "Calculo I",
                            area: "math",
                            students: [
                                {
                                    id: 1,
                                    misses: 3,
                                    active: true,
                                },
                            ],
                        },
                        {
                            id: 2,
                            name: "Geometría",
                            area: "math",
                            students: [
                                {
                                    id: 2,
                                    misses: 2,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
            ]);
        });
    });

    describe("#getTopic", () => {
        it("Should return the array of professor's topics", async () => {
            const response = await request(app).get(
                "/api/v1/professor/1/topic"
            );
            expect(response.body.data).toEqual([
                {
                    id: 1,
                    name: "Calculo I",
                    area: "math",
                    students: [
                        {
                            id: 1,
                            misses: 3,
                            active: true,
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Geometría",
                    area: "math",
                    students: [
                        {
                            id: 2,
                            misses: 2,
                            active: true,
                        },
                    ],
                },
            ]);
        });

        it("Should filter by id if given", async () => {
            const response = await request(app).get(
                "/api/v1/professor/1/topic?id=2"
            );
            expect(response.body.data).toEqual([
                {
                    id: 2,
                    name: "Geometría",
                    area: "math",
                    students: [
                        {
                            id: 2,
                            misses: 2,
                            active: true,
                        },
                    ],
                },
            ]);
        });
    });

    describe("#getStudent", () => {
        it("Should return the array of professor's topics's students", async () => {
            const response = await request(app).get(
                "/api/v1/professor/1/topic/1/student"
            );
            expect(response.body.data).toEqual([
                {
                    id: 1,
                    misses: 3,
                    active: true,
                },
            ]);
        });

        it("Should filter by id if given", async () => {
            const response = await request(app).get(
                "/api/v1/professor/1/topic/1/student?id=1"
            );
            expect(response.body.data).toEqual([
                {
                    id: 1,
                    misses: 3,
                    active: true,
                },
            ]);
        });
    });
});
