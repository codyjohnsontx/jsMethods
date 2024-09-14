// charCodeAt()

// returns an integer between 0 and 65535 represeting the UTF-16 code unit at the given index
// only returns character at a specific index in a string

// Time complexity: is O(1) or constant time
// This is because it directly accesses the character at the specified index and returns the unicode
// value without needing to loop through string

// Example 1:
// const message = 'Hello world'
// console.log(message.charCodeAt(2))      // returns 108

// Example 2:
// let str = "Hello";
// let charCode = str.charCodeAt(0);
// console.log(charCode);  // Output: 72

// Example 3:
// let str = "!";
// let charCode = str.charCodeAt(0);
// console.log(charCode);  // Output: 33
