// .replace()

// returns a new String with one, some, or all matches of a pattern replaced by a replacement
// The pattern can be a string or a RegEx, and the replacement can be a string or a function called for
// each match.

// Time Complexity: can vary depending on the pattern used for matching and the size of the string
// for simple string replacements, its typically O(n), where n is the length of the string
// when using regEX, complexity can increase from O(n) to O(nm)

// Example 1:

// const rapName = '21'

// console.log(`My name is ${rapName.replace('21', 'Shéyaa ')}`)  // My name is Shéyaa

// Example 2:
// const phrase = "Hello, world!";
// const newPhrase = phrase.replace("world", "there");
// console.log(newPhrase);  // Output: 'Hello, there!'

// Example 3:

// const announcement = "Welcome to the festival, festival starts at noon.";
// const updatedAnnouncement = announcement.replace("festival", "party");
// console.log(updatedAnnouncement);  // Output: 'Welcome to the party, festival starts at noon.'
