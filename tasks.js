function numberToString(num) {
    return num.toString()
}

function rowSumOddNumbers(n) {
    return n * n * n
}

function index(array, n) {
    if (array.length >= n + 1){
        return Math.pow(array[n],n)
    }else {
        return -1
    }
    // This kata is from check py.checkio.org
//
// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
//
// Let's look at a few examples:
//
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
}


function boolToWord(bool) {
    return bool === true ? 'Yes' : 'No'
    // Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
}

function countSheeps(arrayOfSheep) {
    let result = 0
    for (let i = 0; i < arrayOfSheep.length; i++)
        if (arrayOfSheep[i] === true){
            result++
        }
    return result
    // Consider an array/list of sheep where some sheep may be missing from their place. We need a function
    // that counts the number of sheep present in the array
    // (true means present).
    // For example:
    //     const arrayOfSheep = [true, true, true, false,
    //         true, true, true, true,
    //         true, false, true, false,
    //         true, false, false, true,
    //         true, true, true, true,
    //         false, false, true, true]
}

function eachCons(array, n) {
    return array.map((x, y) => array.slice(y, y + n)).filter(x => x.length == n)

//     Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n,
//     like so:
//         each_cons([1,2,3,4], 2)
// #=> [[1,2], [2,3], [3,4]]
//     each_cons([1,2,3,4], 3)
// #=> [[1,2,3],[2,3,4]]
}
