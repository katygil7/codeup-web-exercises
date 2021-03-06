(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {};
    person.firstName = "Katherine";
    person.lastName = "Gil";

    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function (){
     console.log ("Hello from " + person.firstName + " " + person.lastName + "!");
    //Another way
     //console.log (`Hello from
        // ${person.firstName}
        // ${person.lastName}`);
}
    person.sayHello();



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     let shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];


     shoppers.forEach(function (costumer){
         if (costumer.amount > 200) {
           console.log(" hey there! " + costumer.name + " your total is $" + costumer.amount + " so, you get a discount of 12% and your new total is $" + (costumer.amount - (costumer.amount * .12)));
         } else{
             console.log( "Sorry! " + costumer.name + " your total is " + costumer.amount + " which does not qualify for a discount");
         }

     });

     // with For loop
    // for (let i = 0; i < shoppers.length; i++) {
    //     const shopper = shoppers[i];
    //     let outputString = `${shopper.name} ${shopper.amount}`;
    //     if (shopper.amount > 200){
    //         let discount = shopper.amount * .12;
    //         let afterDiscountAmount = shopper.amount - discount;
    //         outputString += ` ${discount} ${afterDiscountAmount}`;
    //     }
    //
    // }
   // console.log(outputString);
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {title: "Twilight" , Author: {firstN: "Stephene", lastN: "Meyer"}},
        {title: "Narnia" , Author: {firstN: "C.S", lastN: "Lewis"}},
        {title: "Harry Potter" , Author: {firstN: "J.K", lastN: "Rowling"}},
        {title: "Outsider" , Author: {firstN: "Stephen", lastN: "King"}},
        {title: "Rich Dad Poor Dad" , Author: {firstN: "Robert", lastN: "Kiyosaki"}}

    ];

    console.log(books[4].Author.lastN)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - thee book number (us the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function (shopper,index){

        console.log("book #" + (index + 1) + "\n" + "Title: " + shopper.title + "\n" + "Author: " + shopper.Author.firstN + " " + shopper.Author.lastN)

    })
    // for (let i = 0; i < books.length; i++) {
    //     let book = books[i];
    //     let outputString = `Book # ${i + 1}
    //     title : ${book.title}
    //     Author: ${book.Author.firstN} ${book.Author.lastN}`
    // }


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
