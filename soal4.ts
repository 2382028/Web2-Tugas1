function drawStaircase(size: number): void {
    for (let row = 1; row <= size; row++) {
        let leadingSpaces = " ".repeat(size - row);
        let steps = "#".repeat(row);
        console.log(leadingSpaces + steps);
    }
}

const size: number = 6;
drawStaircase(size);
