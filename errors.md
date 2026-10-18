# Exercise 1: Six Broken JavaScript Snippets

## 1. Greeting

**Error type:** ReferenceError

**Meaning:** JavaScript cannot find `studentname` because the variable was declared as `studentName`. JavaScript is case-sensitive.

**Fix:**
```javascript
const studentName = "Aline";
console.log("Welcome, " + studentName);
```

**How I found it:** I checked the Console error and compared the variable name in the error with the declared variable.

## 2. Shouting

**Error type:** TypeError

**Meaning:** `toUppercase()` is not a valid string method. The correct method is `toUpperCase()`.

**Fix:**
```javascript
const city = "Kigali";
console.log(city.toUpperCase());
```

**How I found it:** I inspected the method name at the line reported by the Console.

## 3. Page title

**Error type:** TypeError

**Meaning:** `querySelector()` returns `null` if the selector does not match an element. The selector `#page-titel` appears to contain a spelling mistake.

**Fix (assuming the heading ID is `page-title`):**
```javascript
const title = document.querySelector("#page-title");
title.textContent = "My Tasks";
```

**How I found it:** I compared the selector with the heading's actual ID in the Elements panel.

## 4. Score counter

**Error type:** TypeError

**Meaning:** A variable declared using `const` cannot be reassigned.

**Fix:**
```javascript
let score = 0;
score = score + 10;
console.log(score);
```

**How I found it:** I inspected the assignment line reported by the Console.

## 5. Shopping list

**Error type:** SyntaxError

**Meaning:** A comma is missing between `"avocado"` and `"banana"` in the array.

**Fix:**
```javascript
const fruits = ["mango", "avocado", "banana"];
console.log(fruits.length);
```

**How I found it:** I inspected the array at the line reported by the syntax error.

## 6. Countdown

**Error type:** RangeError — maximum call stack size exceeded

**Meaning:** The function calls itself forever because it has no stopping condition.

**Fix:**
```javascript
function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);
}

countdown(5);
```

**How I found it:** I inspected the stack trace and identified repeated calls to `countdown()`.


