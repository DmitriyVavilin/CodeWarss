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
const binarySearch = (arr, item) => {
    let start = 0
    let end = arr.length
    let middle;
    let found = false
    let position = -1
    while (found === false && start <= end) {
        middle = Math.floor((start + end) / 2)
        if (arr[middle] === item) {
            found = true
            position = middle
            return position
        }
        if (item < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }

    }
    return position
}
const linerSearch = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i
        }
    }
    return null
}
const firstLetterConversion = (str) => {
    const words = str.split(' ')
    return  words.map((el, index) => {
        if(index === 1) {
            return el[0].toLowerCase() + el.slice(1)
        }else{
            return el[0].toUpperCase() + el.slice(1)
        }
    }).join(' ')
    // const str = 'hello World'
}
function reverseWords(str) {
    const result = str.split(' ')
    const words = result.map(word => {
        return word.split('').reverse().join('')
    })
    return  words.join(' ')

    // Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in
    // the string should be retained.
    // "This is an example!" ==> "sihT si na !elpmaxe"
    // "double  spaces"      ==> "elbuod  secaps"
}
function solution(digits) {
    let largestSequence = 0;
    for (let i = 0; i <= digits.length - 5; i++) {
        const sequence = digits.substring(i,5)
        const sequenceNumbers = parseInt(sequence)

        if (sequenceNumbers > largestSequence) {
            largestSequence = sequenceNumbers
        }
    }
    return largestSequence
}