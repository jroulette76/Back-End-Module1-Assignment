import { describe } from "node:test";
import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    it("should calculate a significant gain correctly", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 15000;

        // Act
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // Assert
        expect(result.profitOrLoss).toBe(5000);
        expect(result.percentageChange).toBe(50);
        expect(result.performanceSummary).toBe("Excellent performance! Your investments are doing great.")
    });
});