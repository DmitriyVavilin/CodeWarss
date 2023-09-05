function numberToString(num) {
    return num.toString()
}

function rowSumOddNumbers(n) {
    return n * n * n
}

function index(array, n) {
    if (array.length >= n + 1) {
        return Math.pow(array[n], n)
    } else {
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
        if (arrayOfSheep[i] === true) {
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
    return words.map((el, index) => {
        if (index === 1) {
            return el[0].toLowerCase() + el.slice(1)
        } else {
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
    return words.join(' ')

    // Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in
    // the string should be retained.
    // "This is an example!" ==> "sihT si na !elpmaxe"
    // "double  spaces"      ==> "elbuod  secaps"
}

function solution(digits) {
    let largestSequence = 0;
    for (let i = 0; i <= digits.length - 5; i++) {
        const sequence = digits.substring(i, 5)
        const sequenceNumbers = parseInt(sequence)

        if (sequenceNumbers > largestSequence) {
            largestSequence = sequenceNumbers
        }
    }
    return largestSequence
}

function XO(str) {
    str = str.toLowerCase()
    let xCount = 0
    let oCount = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            xCount++
        } else if (str[i] === 'o') {
            oCount++
        }
    }
    return xCount === oCount
    //Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
    // The string can contain any char.
    // Examples input/output:
    // XO("ooxx") => true
    // XO("xooxx") => false
    // XO("ooxXm") => true
    // XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    // XO("zzoo") => false
}

const closestMultiple10 = num => {
    return Math.round(num / 10) * 10
//    Given a number return the closest number to it that is divisible by 10.
};

function solution(nums) {
    if (!nums) {
        return []
    }
    return nums.sort((a, b) => a - b)
    // Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
    //     For example:
    //     solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
    // solution(null); // should return []
}

function minJumps(start, end) {
    if (start === end) {
        return 0;
    }
    const dp = new Array(end + 1).fill(Infinity);
    dp[start] = 0;

    for (let i = start; i <= end; i++) {
        if (dp[i] !== Infinity) {
            if (i + 1 <= end) {
                dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
            }
            if (i + 3 <= end) {
                dp[i + 3] = Math.min(dp[i + 3], dp[i] + 1);
            }
        }
    }
    return dp[end];

// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf
// directly above its head), according to the illustration:
//     Input
//     Start and finish shelf numbers (always positive integers, finish no smaller than start)
//
//     Task
//     Find the minimum number of jumps to go from start to finish
//
//     Example
//     Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)
}

function noSpace(x){
    const res = x.split(' ').join('')
    return res
//    Write a function that removes the spaces from the string, then return the resultant string.
}

function redistributeWealth(wealth) {
    const totalWealth = wealth.reduce((a, b) => a + b, 0);
    const numCitizens = wealth.length;
    const equalShare = Math.floor(totalWealth / numCitizens);

    const redistributedWealth = wealth.map(() => equalShare);
    return redistributedWealth
//    The year is 2088 and the Radical Marxist Socialist People's Party (RMSPP) has just seized power in Brazil.
//
// Their first act in power is absolute wealth equality through coercive redistribution.
//
// Create a function that redistributes all wealth equally among all citizens.
//
// Wealth is represented as an array/list where every index is the wealth of a single citizen.
// The function should mutate the input such that every index has the same amount of wealth.
//
// See example:
}

function correctStr(string) {
    const res = []
    const newString = string.split('')
    for(let i = 0; i < newString.length; i++) {
        const currentValue = newString[i]
        if(currentValue === '5'){
            res.push('S')
        }else if (currentValue === '0'){
            res.push('O')
        }else if(currentValue === '1') {
            res.push('I')
        }else {
            res.push(currentValue)
        }
    }
    return res.join('')
}