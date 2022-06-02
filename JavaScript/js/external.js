// console.log("Hello from external JavaScript")
// alert("Welcome to my Website!")
// let userResponse = prompt("What is your favorite color?" )  //let userResponse is the response of the user guardado in order to use their response again ??
// alert ("Great," + userResponse + " is my favorite color too")

// let pricePerDay = 3
// let numDaysRented = prompt("how many days would you like to rent your movie")
// alert (" Awesome! You will be renting the movie for " + numDaysRented + " days. That means your to is $" + (numDaysRented * pricePerDay));
// let googlePay = 400;
//let facebooPay  = 350;
//let amazonPay = 380;

//let totalGoogle = prompt( "hey you are working hard - how many hours did you work for Google? ")
//let totalFacebook =  prompt("hey you are working hard - how many hours did you work for Facebook? " )
//let totalAmazon = prompt("hey you are working hard - how many hours did you work for Amazon? ")
    //let sumGoogle = googlePay * totalGoogle; // could create a variable to get to the total
// could also also do it LIVE in  the alert
 //alert( "Cool beans - here is what i am seeing, you will earn $" + "from working at Google. You will earn $" + (totalGoogle * googlePay))

//let timeSchedule = confirm( " Do you have time in your schedule for this class?")
//let roomInClass = confirm ("Did the class have room for an additional student")
//alert( "it is" + (roomInClass && timeSchedule + " that you can attend this class with what you told me")

let moreThanTwo = confirm( "Do you have more than two items in your cart? ")
let offerStillValid = confirm(" Is the offer on the product still valid?")
let premiumMember = confirm(" Are you premium member?")
alert(" Welcome to kat's - Looks like you have brought me a cart! From what you told me it is " + ( moreThanTwo && offerStillValid || premiumMember) + "that you get a cool hat and a discount today")



