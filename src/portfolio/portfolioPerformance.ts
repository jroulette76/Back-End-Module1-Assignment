/**
 * This interface defines the structure of the object returned by the
 * calculatePortfolioPerformance function.
 */

export interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

/**
 * Determines the performance summary message based on the percentage change.
 */
export const getPerformanceSummary = (percentageChange: number): string => {
    switch (true) {
        case percentageChange >= 30:
            return "Excellent performance! Your investments are doing great.";
        case percentageChange >= 10:
            return "Solid gain. Keep monitoring your investments.";
        case percentageChange > 0:
            return "Modest gain. Your portfolio is growing slowly.";
        case percentageChange === 0:
            return "No change. Your portfolio is holding steady.";
        case percentageChange > -10:
            return "Minor loss. Stay calm and review your options.";
        default:
            return "Significant loss. Review your portfolio strategy.";
    }
};

/**
 * Calculates the performance of a financial portfolio based on the initial investment
 * and current value. Produces profit/loss, percentage change, and a performance summary output.
 */
export const calculatePortfolioPerformance = (initialInvestment: number, currentValue: number): PortfolioPerformance => {
    const profitOrLoss = currentValue - initialInvestment;

    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    const performanceSummary = getPerformanceSummary(percentageChange);

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary
    };
};