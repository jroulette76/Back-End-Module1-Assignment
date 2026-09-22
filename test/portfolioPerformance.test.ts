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

    it("should return a Modest gain for a 5% increase", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 10500;

        // Act
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);
        
        // Assert
        expect(result.profitOrLoss).toBe(500);
        expect(result.percentageChange).toBe(5);
        expect(result.performanceSummary).toBe("Modest gain. Your portfolio is growing slowly.")
    });

    it("should return a Minor loss for a 10% decrease", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 9000;

        // Act
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);
        
        // Assert
        expect(result.profitOrLoss).toBe(-1000);
        expect(result.percentageChange).toBe(-10);
        expect(result.performanceSummary).toBe("Minor loss. Stay calm and review your options.")
    });

});