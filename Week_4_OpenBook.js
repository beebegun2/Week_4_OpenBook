//question 1 - Convert the following function into an arrow function. Refer to the new function as xor.
// current function is - 
//function myFunction(num1, num2){
    //return num1 ^ num2;
//} the var was provided in the question as example to test
//var num1 = 4
//var num2 = 6

let xor = (num1, num2) => num1 ^ num2; //correct
//console.log(xor(num1,num2));

//-----------------------------------------
//question 2 - Convert the following function into an arrow function. Refer to the new function as revert.
// current function is - 
//function myFunction(value) {return !value; }

let revert = (value) => !value; //correct
//console.log(revert(a));

//------------------------------------------
//question 3 - Convert the following function into an arrow function. Refer to the new function as returnSquareRoot.
// current function is - 
//function myFunction(num) { return Math.sqrt(num); }
//var a = 4

let returnSquareRoot = (num) => Math.sqrt(num); //correct
//console.log(returnSquareRoot(a));

//-------------------------------------------
//question 4 - Convert the following function into an arrow function. Refer to the new function as fancyAlgorithm.
//current function is - 
//function myFunction(num1, num2, num3) {
    //let value = 0;
    //for(let i = 0; i < num3; i++) {
        //value = (value + num2) * num1;
        //}
        //return value / (num1 * (num3 * 10));
    //}
//let num1 = 1
//let num2 = 2
//let num3 = 3

let fancyAlgorithm = (num1, num2, num3) => {
    let value = 0;
    for(let i = 0; i < num3; i++) {
        value = (value + num2) * num1;
    }
    return value / (num1 * (num3 * 10 ));
}; //correct
//console.log(fancyAlgorithm(num1, num2, num3));

//--------------------------------------------
//question 5 - Convert the following function into an arrow function. Refer to the new function as monthlyPayment.
//current function - 
// function myFunction(yearlyPayment){
    //let monthly = yearlyPayment / 12;
    //return monthly.toFixed(2);
//}
//let a = 150
let monthlyPayment = (yearlyPayment) => {
    let monthly = yearlyPayment / 12;
    return monthly.toFixed(2); //correct
}
//console.log(monthlyPayment(a));

//------------------------------------
//question 6 - Convert the following function into an arrow function. Refer to the new function as returnSum.
//current function
//function addTwoInputs(a,b) { return a+b; }
//let a = 4
//let b = 6
let returnSum = () => (a + b); {
}
 //  console.log(returnSum(a,b));

 //----------------------------------
 //question 7 - Convert the following function into an arrow function. Refer to the new function as returnNumber. Note the returned value is a template literal. Remember to use backticks.
//current function - 
//function myFunction(num) {
    //return `Your number is $(num)`
//}
//let a = 15
let returnNumber = (num) => `Your number is ${num}`;

//console.log(returnNumber(a));
