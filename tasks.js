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

function noSpace(x) {
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
    for (let i = 0; i < newString.length; i++) {
        const currentValue = newString[i]
        if (currentValue === '5') {
            res.push('S')
        } else if (currentValue === '0') {
            res.push('O')
        } else if (currentValue === '1') {
            res.push('I')
        } else {
            res.push(currentValue)
        }
    }
    return res.join('')
}

function warnTheSheep(queue) {
    const wolfIndex = queue.indexOf('wolf')
    const sheepNumber = queue.length - wolf - 1
    if (wolfIndex === queue.length - 1) {
        return "Pls go away and stop eating my sheep"
    } else {
        return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`
    }
    //Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
    //
    // Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
    //If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
    //
    // Note: there will always be exactly one wolf in the array.
}

function validParentheses(str) {
    const stack = [];
    const bracketPairs = {
        "(": ")",
    };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (bracketPairs[char]) {
            stack.push(char);
        } else if (char === ")" || char === "]" || char === "}") {
            const lastOpeningBracket = stack.pop();
            if (bracketPairs[lastOpeningBracket] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
// Напишите функцию, которая принимает строку круглых скобок и определяет, допустим ли порядок круглых скобок.
// Функция должна возвращать значение true, если строка действительна и false недействительна.
//
// Примеры
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
}


const minNumber = function (list) {
    const maxNum = Math.max(...list)
    return maxNum
}

const maxNumber = function (list) {
    const minNum = Math.min(...list)
    return minNum
    //Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
    // that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
}

function countPositivesSumNegatives(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }

    let positiveCount = 0;
    let sumNegative = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            sumNegative += arr[i];
        }
    }

    return [positiveCount, sumNegative];
    // Given an array of integers.
    //
    //     Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
    //
    //     If the input is an empty array or is null, return an empty array.
    //
    //     Example
    // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
}

function sumOfIntegersInString(string) {
    const regex = /\d+/g;
    const numbers = string.match(regex)

    if (!numbers) {
        return 0
    }

    const res = numbers.reduce((acc, value) => acc + parseInt(value, 10), 0)
    return res

    // Your task in this kata is to implement a function that calculates the sum of the integers inside a string.
    // For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.
    // Note: only positive integers will be tested.
}

function numbersWithDigitInside(x, d) {
    let count = 0;
    let sum = 0;
    let product = 1;

    for (let i = 1; i <= x; i++) {
        if (i.toString().includes(d.toString())) {
            count++;
            sum += i;
            product *= i;
        }
    }

    return count === 0 ? [0, 0, 0] : [count, sum, product];
}

function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return arr[i];
        }
    }
    return null;
}

function squareSum(numbers) {
    const res = []
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i] * numbers[i]
        res.push(num)
    }
    return res.reduce((acc, value) => acc + value, 0)
}

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) {
        sharkSpeed /= 2;
    }
    const timeToPontoon = pontoonDistance / youSpeed;
    const timeToYou = sharkDistance / sharkSpeed;

    if (timeToPontoon < timeToYou) {
        return "Живой!";
    } else {
        return "Наживка для акулы!";
    }
}

function sayHello(name, city, state) {
    return `Hello, ${name.map(el => el).join(' ')}! Welcome to ${city}, ${state}!`
}

function squareOrSquareRoot(arr) {
    return arr.map((number) => {
        if (Number.isInteger(Math.sqrt(number))) {
            return Math.sqrt(number);
        } else {
            return number * number;
        }
    });
}


function betterThanAverage(classScores, yourScore) {
    const sumClassScores = classScores.reduce((total, score) => total + score, 0);
    const averageClassScore = sumClassScores / classScores.length;

    return yourScore > averageClassScore;
}

function isOpposite(s1,s2){
    if (s1.length!=s2.length || s1=='' || s2=='') return false

    arr1=s1.split('')
    arr2=s2.split('')

    for(var i=0;i<arr1.length;i++){
        if (arr1[i]==arr2[i]) return false
    }
    return true
}