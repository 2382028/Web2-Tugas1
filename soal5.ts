function professorMood(testCases: { students: number; threshold: number; times: number[] }[]): void {
    for (const testCase of testCases) {
        const { students, threshold, times } = testCase;
        let onTimeCount = times.filter(time => time <= 0).length;
        
        console.log(onTimeCount >= threshold ? "NO" : "YES");
    }
}

const testCases = [
    { students: 4, threshold: 3, times: [-1, -3, 4, 2] },
    { students: 5, threshold: 2, times: [0, -1, 2, 1, -2] }
];

professorMood(testCases);
