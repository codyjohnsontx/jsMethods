// .slice()

// returns a shallow copy of a portion of an array into a new array object selected from
// start to end where start and end represent the index of items in that array.
// original array will not be modified

// time complexity: O(n) where n is the number of elements in the substring
// or subarray that is being created

// Example 1:
// const str = "Hello, world!";
// const slicedStr = str.slice(7, 12);
// console.log(slicedStr);  // Output: 'world'

// Example 2:
// const str = "Hello, world!";
// const slicedStr = str.slice(-6, -1);
// console.log(slicedStr);  // Output: 'world'

// Example 3:
// const str = "Hello, world!";
// const slicedStr = str.slice(7);
// console.log(slicedStr);  // Output: 'world!'
