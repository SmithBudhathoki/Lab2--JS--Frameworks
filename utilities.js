// utilities.js

// 1. Simple Welcome/Greeting Function (no return)
export function welcomeUser(firstName, lastName) {
    console.log(`🎉 Welcome ${firstName} ${lastName} to G@I College!`);
  }
  
  // 2. Unit Converter: Celsius to Fahrenheit
  export function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // 3. Math Operation: Factorial
  export function factorial(n) {
    if (n < 0) return undefined;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // 4. Advanced Function: Palindrome Checker
  export function isPalindrome(word) {
    const clean = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
  }
  