function isPalindromeNumber(number){
    return [...number.toString()].reverse().join('') === number.toString()
};