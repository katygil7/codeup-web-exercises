"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
// var userName = prompt("what's your name");
// function sayHello (name){
//    alert( " Hello, " + name + "!");
// }

// ^^ solution with instructor

// sayHello(userName.toLowerCase());
// var helloMessage = sayHello(kat)
//  function sayHello(name){
//
//      return "Hello, " + name;
//
// }
//
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.

 * console.log 'helloMessage' to check your work
 */

// let helloMesagge = sayHello("Katherine");
// console.log(helloMesagge);
// ^^ solution with instructor


//let helloMessage = sayHello("KATHERINE");
//console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
// let myName = "Katherine"
// console.log(sayHello(myName));
// ^^ solution with instructor

//let myName = "katherine"
//sayHello(myName); // "" storing my name into the myName variable. then put that into the variable sayHello to store the result.

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
//var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
 // function isTwo(num){

     // return num === 2;
// }
// console.log(isTwo(random));
// ^^ solution with instructor

//function isTwo (x){
  //  return x === 2;
//this is to get a true or false ^

    //if (x !== 2){
      //  return = false
//} else {
  //  return = true}
//}
//console.log(x);





/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(tipAmount,billTotal) {

    return tipAmount * billTotal;
}
// ^^ solution with instructor
// function calculateTip(tipP, toBill){
//
//     return tipP * toBill
//
// }
// calculateTip( 0.20, 20);
//
// let userBill = "Your total is $20"
// alert(userBill + " ! Thank you for coming ")
// prompt(" Would you like to leave tip", .20)
// alert( "Your total is $24 come back again")
// calculateTip();

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
alert("Thank you for coming lets see how much was the total and  you like to tip")
let totalAmount prompt("how much was your bill?")
let tipAsDecimal prompt("Alright how much would you like to tip of $" + totalAmount + "?")
alert("alright, your tip will be $" + calculateTip(tipAsDecimal,totalAmount))
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount(price, discountAsDeci){

    return originalPrice - ( originalPrice * discountAsDeci);

    // return originalPrice - calculateTip ( discountAsdeci, originalPrice);
    // ^^ solution with instructor

}
//finished
