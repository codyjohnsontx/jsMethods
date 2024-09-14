// .search()

// used with strings. excutes a search for a match between a regular expression and this string,
// returning the index of the first match in the string
// If no match is found, it returns -1

// Time complexity: when used to search a string with a regular expression, is typically O(n)
// where n is the length of the string
// For regular expressions that involve complex patterns, it can approach O(nm) where
// m relates to the complexity and length of the pattern

// Example 1:
// const paragraph = "I think Ruth's dog is cuter than your dog!";

// // Anything not a word character, whitespace or apostrophe
// const regex = /[^\w\s']/g;

// console.log(paragraph.search(regex));
// // Expected output: 41

// console.log(paragraph[paragraph.search(regex)]);
// // Expected output: "!"

// Example 2:
// const text = "Hello, world!";
// const index = text.search(/world/);
// console.log(index);  // Output: 7

// Example 3:
// const text = "Have a great Day";
// const index = text.search(/day/i);  // The 'i' flag makes the search case insensitive
// console.log(index);  // Output: 12
