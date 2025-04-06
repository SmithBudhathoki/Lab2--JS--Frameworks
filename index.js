// index.js

import { welcomeUser, convertCelsiusToFahrenheit, factorial, isPalindrome } from './utilities.js';

// Call 1st Function
welcomeUser("Smith", "Budhathoki");

// Call 2nd Function
const fahrenheit = convertCelsiusToFahrenheit(25);
console.log(`🔥 25°C is equal to ${fahrenheit.toFixed(2)}°F`);

// Call 3rd Function
const fact = factorial(5);
console.log(`🧮 The factorial of 5 is ${fact}`);

// Call 4th Function
const word = "Radar";
console.log(`🔁 Is "${word}" a palindrome? ${isPalindrome(word) ? "Yes ✅" : "No ❌"}`);
