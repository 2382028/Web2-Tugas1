function roundGrades(grades: number[]): number[] {
    let adjustedGrades: number[] = [];

    for (let score of grades) {
        if (score >= 38) {
            let nextMultipleOfFive = Math.ceil(score / 5) * 5;
            let difference = nextMultipleOfFive - score;
            
            if (difference < 3) {
                adjustedGrades.push(nextMultipleOfFive);
            } else {
                adjustedGrades.push(score);
            }
        } else {
            adjustedGrades.push(score);
        }
    }

    return adjustedGrades;
}

const scores: number[] = [73, 67, 38, 33];
const finalGrades = roundGrades(scores);

console.log(finalGrades);
