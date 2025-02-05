function countCamelCaseWords(s: string): number {
    let wordCount = 1;

    for (let char of s) {
        if (char >= 'A' && char <= 'Z') {
            wordCount++;
        }
    }

    return wordCount;
}

const inputString: string = "saveChangesInTheEditor"; 
const wordCountResult = countCamelCaseWords(inputString);
console.log(wordCountResult);
