function romanToInteger(romanNumber) {
    
    let sum = 0

    const romanSymbols = ['I','V','X','L','C','D','M']
    const romanValues = [1, 5, 10, 50, 100, 500, 1000]

    let index = 0

    for (let i=0; i <= romanNumber.length-1; i++){
        
        if(romanSymbols.indexOf(romanNumber[i]) < romanSymbols.indexOf(romanNumber[i+1])){
            index = romanSymbols.indexOf(romanNumber[i])
            sum = sum - romanValues[index]
        }else{
            index = romanSymbols.indexOf(romanNumber[i])
            sum = sum + romanValues[index]
        }
    }
    return sum;
}

console.log(romanToInteger("XV"))