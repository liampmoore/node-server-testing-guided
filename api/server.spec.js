require('dotenv').config()

const request = require("supertest");

const server = require("./server.js");

describe("server.js", function () {
    describe("GET /", function () {
        it("should return 200", async function () {
            const response = await request(server).get("/")
                expect(response.status).toBe(200)
        })
        it.todo("should return json")
        it.todo('should respond with {api: "up" }')
    })

})