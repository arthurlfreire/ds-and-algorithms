function twoSum(arrayRange, targetNumber){
    let solution = []

    let array = []
    let i = 0
    while(i < arrayRange){
        array.push(Math.round(Math.random() * 5))
        i++
    }

    for(let k = 0; k < array.length; k++){
        for(let j = 0; j < array.length; j++){
            if(array[k] + array[j] === targetNumber){
                solution.push(array[k], array[j])
                break
            }
        }
    }
    console.log(array, targetNumber)
    return solution === [] ? 
    "There are no two numbers that add up to the target number"
    : solution
}

console.log(twoSum(Math.round(Math.random() * 5), Math.round(Math.random() * 10)))