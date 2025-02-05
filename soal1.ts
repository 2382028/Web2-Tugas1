function countValleys(steps: number, path: string): number {
    let valleyCount = 0;
    let elevation = 0;

    for (let step of path) {
        if (step === 'U') {
            elevation++;
        } else {
            elevation--;
        }
        
        if (elevation === 0 && step === 'U') {
            valleyCount++;
        }
    }

    return valleyCount;
}

const steps: number = 8;
const path: string = "UDDDUDUU"; 

const result = countValleys(steps, path);
console.log(result);
