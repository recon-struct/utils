

/**
 * Checks if a given string is a palindrome.
 *
 * @param input - The string to check.
 * @returns `true` if the string is a palindrome, `false` otherwise.
 */
const isPalindrome = (input: string) => {
  let match = true
  
  for (let i = 0; i < Math.ceil(input.length / 2); i++) {
    const j = input.length - i - 1;
    
    console.log(input[i], input[j], j)
    
    if (i === j) {
      break
    }
    
    if (input[i] !== input[j]) {
      match = false
      break
    }
  }
  
  return match
}

export default isPalindrome
