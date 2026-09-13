/**
 * This interface defines the structure of the object returned by the
 * calculatePortfolioPerformance function.
 */

interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentChange: number;
    performanceSummary: string;
}
