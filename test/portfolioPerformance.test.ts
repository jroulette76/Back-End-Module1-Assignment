import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    it("should return Excellent performance for a gain more than 30%.", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 16000;

        // Act
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // Assert
        expect(result.profitOrLoss).toBe(6000);
        expect(result.percentageChange).toBe(60);
        expect(result.performanceSummary).toBe("Excellent performance! Your investments are doing great.")
    });

    it("should return a Solid gain for a 29.99% increase", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 12999.9;

        // Act
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);
        
        // Assert
        expect(result.profitOrLoss).toBe(2999.8999999999996);
        expect(result.percentageChange).toBe(29.999);
        expect(result.performanceSummary).toBe("Solid gain. Keep monitoring your investments.")
    });

    it("should return a Modest gain for a 9.99% increase", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 10999.9;

        // Act
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);
        
        // Assert
        expect(result.profitOrLoss).toBe(999.8999999999996);
        expect(result.percentageChange).toBe(9.998999999999997);
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