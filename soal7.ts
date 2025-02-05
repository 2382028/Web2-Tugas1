function calculateRatios(...numbers: number[]): string[] {
    const counts = new Map<number, number>();
    const ratios: string[] = [];

    numbers.forEach(num => {
        if (counts.has(num)) {
            counts.set(num, counts.get(num)! + 1);
        } else {
            counts.set(num, 1);
        }
    });

    counts.forEach(count => {
        ratios.push((count / numbers.length).toPrecision(7));
    });

    return ratios;
}

console.log(calculateRatios(1, 1, 0, -1, -1));
