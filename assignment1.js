//Question 1: Converting to number
let numberStr = "11"
let newNumberStr = Number(numberStr)
console.log(newNumberStr)
console.log(typeof newNumberStr)

/* Code Explanation
-Created a variable, numberStr, and assigned it a string value "11".
-Converted numberStr explicitly into a number using the Number() function,
 and stored the result in a new variable, newNumberStr.
-Printed out newNumberStr, and the type of its data, using console.log().
*/

  
// Question 2: Converting to string
let num = 5
let newNum = String(num)
console.log(newNum)
console.log( typeof newNum)

/*Code Explanation
- Created a variable num, and assigned it a number value, 5.
- Converted num explicitly into a string using the String() function,
  and assigned the result to a new variable, newNum.
- Printed out newNum and the type of its data using console.log().
*/


//Question 3: Converting to Boolean Explicitly
let truthyValue = "Yes"
let falsyValue = 0
let newTruthyValue = Boolean(truthyValue)
let newFalsyValue = Boolean(falsyValue)
console.log(newTruthyValue)
console.log(typeof newTruthyValue)
console.log(newFalsyValue)
console.log(typeof newFalsyValue)

/* Code Explanation:
- Created two variables, truthyValue (assigned it a string value "Yes"),
 and falsyValue (assigned it a number value 0).
- Converted the two variables explicitly into Boolean datatypes using the Boolean() function, 
  and assigned the results to new variables, newTruthyValue and newFalsyValue respectively.
- Printed out the new variables (newTruthyValue and newFalsyValue) and the types of 
  their data(used typeof function) using console.log().
*/