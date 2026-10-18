# Exercise 1: Six Broken JavaScript Snippets

## 1. Greeting

**Error type:** ReferenceError

**Meaning:** JavaScript cannot find `studentname` because the variable was declared as `studentName`. JavaScript is case-sensitive.

**Fix:**
const studentName = "Aline";
console.log("Welcome, " + studentName);

**How I found it:** I checked the Console error and compared the variable name in the error with the declared variable.
