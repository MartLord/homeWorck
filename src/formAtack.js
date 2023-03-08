import * as coefficientCalculator from "./coef.js";

export const damage = (heroType, opponentType, attackPower, opponentDefence) => {
    let coeff = coefficientCalculator.calculateCoef(heroType, opponentType);
    return 50 * (attackPower / opponentDefence) * coeff;
}

