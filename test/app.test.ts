import request from "supertest";
// import supertest request object

import { Response } from "supertest";
// import supertest Response type

import app from "../src/app";
import { describe } from "node:test";
// import express application and server

describe("GET /", () => {
    it("should return Hello, world!", async () => {
        // create GET request to root endpoint
        const response: Response = await request(app).get("/");

        // assert that response status is OK, response text is "Hello, world!"
        expect(response.status).toBe(200);
        expect(response.text).toBe("Hello, world!");
    });
});

describe("GET /api/v1/health", () => {
    it("should return server health status", async () => {
        // create GET request to health endpoint
        const response: Response = await request(app).get("/api/v1/health");

        // assert response status OK and health object to have specified properties
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("OK");
        expect(response.body).toHaveProperty("uptime");
        expect(response.body).toHaveProperty("timestamp");
        expect(response.body).toHaveProperty("version");
    });
});

describe("GET /api/v1/portfolio/performance", () => {
    it("should return Excellent performance for a significant gain", async () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 15000;

        // Act
        const response: Response = await request(app).get("/api/v1/portfolio/performance").query({initialInvestment, currentValue});

        // Assert
        expect(response.status).toBe(200);
        expect(response.body.profitOrLoss).toBe(5000);
        expect(response.body.percentageChange).toBe(50);
        expect(response.body.performanceSummary).toBe("Excellent performance! Your investments are doing great.");
    });
});