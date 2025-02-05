function checkPalindrome(str: string): boolean {
    let end = str.length - 1;
    for (let start = 0; start < str.length / 2; start++) {
        console.log(str[start], str[end]);
        if (str[start] !== str[end]) return false;
        end--;
    }

    return true;
}

console.log(checkPalindrome("10"));
