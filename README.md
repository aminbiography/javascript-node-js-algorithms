<h1>Node.js</h1>


```
// Node.js Algorithms

// 1. Factorial of a Number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// 2. Fibonacci Sequence
function fibonacci(n) {
    let a = 0, b = 1;
    let result = [];
    while (n > 0) {
        result.push(a);
        [a, b] = [b, a + b];
        n--;
    }
    return result;
}
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 3. Prime Number Checker
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true

// 4. Palindrome Checker
function isPalindrome(str) {
    let cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(isPalindrome('racecar')); // true

// 5. Sum of an Array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([1, 2, 3, 4])); // 10

// 6. Reverse an Array
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

// 7. Find Maximum in an Array
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 4, 5])); // 5

// 8. Find Minimum in an Array
function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([1, 2, 3, 4, 5])); // 1

// 9. Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]

// 10. Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1; // not found
}
console.log(linearSearch([1, 2, 3, 4, 5], 3)); // 2

// 11. Binary Search
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1; // not found
}
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2

// 12. Count Occurrences in Array
function countOccurrences(arr, val) {
    return arr.filter(item => item === val).length;
}
console.log(countOccurrences([1, 2, 3, 3, 3, 4], 3)); // 3

// 13. Remove Duplicates from an Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

// 14. Merge Two Arrays
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]

// 15. Check if a Number is Even or Odd
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(5)); // false
```
