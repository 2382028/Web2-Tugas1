function countHighestCandles(...candles: number[]): number {
    let maxCount = 0;
    let maxHeight = -1;

    for (const candle of candles) {
        if (candle > maxHeight) {
            maxHeight = candle;
            maxCount = 1;
        } else if (candle === maxHeight) {
            maxCount++;
        }
    }
    
    return maxCount;
}

console.log(countHighestCandles(4, 4, 1, 3));
