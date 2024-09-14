// .split()

// takes a pattern and divides this string into an ordered list of substrings by searching
// for the pattern, puts these substrings into an array, and returns the array

// time complexity: O(n), where n is the length of the string

// Example 1:
// sentence = "Hello, world! Welcome to coding."
// words = sentence.split()  # By default, it splits by any whitespace
// print(words)  # Output: ['Hello,', 'world!', 'Welcome', 'to', 'coding.']

// Example 2:
// data = "apple,banana,cherry"
// fruits = data.split(",")  # Splits at each comma
// print(fruits)  # Output: ['apple', 'banana', 'cherry']

// Example 3:
// timelog = "12:05:45"
// parts = timelog.split(":", 1)  # Splits only at the first colon
// print(parts)  # Output: ['12', '05:45']
