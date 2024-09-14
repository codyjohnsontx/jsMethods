// .match()

// retrieves the result of matching this string against a regular expression

// time complexity: can vary depending on the regular expression used and the length of the string
// it is applied to. Can range between O(n) O(nm), where n is the length of the string and m is
// the length of the pattern being matched

// Example 1:

// const text = "Hello, world!";
// const pattern = /world/;
// const result = text.match(pattern);
// console.log(result);  // Output: ['world', index: 7, input: 'Hello, world!', groups: undefined]

// Example 2:
// const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// const regexp = /[A-E]/gi;
// const matches = str.match(regexp);

// console.log(matches);
// // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

// Example 3:
// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);
// // Expected output: Array ["T", "I"]
