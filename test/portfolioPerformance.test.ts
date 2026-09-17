import { describe } from "node:test";
import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    it("should return Excellent performance for a significant gain", () => {
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

    it("should return a Solid gain for a 20% increase", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 12000;

        // Act
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);
        
        // Assert
        expect(result.profitOrLoss).toBe(2000);
        expect(result.percentageChange).toBe(20);
        expect(result.performanceSummary).toBe("Solid gain. Keep monitoring your investments.")
    });
});