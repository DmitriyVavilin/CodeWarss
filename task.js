function index(array, n) {
        if (array.length >= n){
            return Math.pow(array[n],n)
        }else {
            return -1
        }
}

console.log(index(3, 5))
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.