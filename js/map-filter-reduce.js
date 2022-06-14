const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }

];

let userLanguages = users.filter(function (user){
    //Long way
    //if(user.language.length>=3){
    //return true;
    //else{
    //return false;

    return (user.languages.length >= 3);
// short way ^^^^^^^^^^^^^^
});
console.log(userLanguages);

let userEmails = users.map(function (user){
    return user.email;
});
console.log (userEmails);

let sumOfExperience = users.reduce(function (totalOfAge,user){
    return totalOfAge + user.yearsOfExperience;
} ,0);
console.log(sumOfExperience);

let averageYears = sumOfExperience/users.length;
console.log(averageYears);

let userLongEmail = users.reduce(function (longestEmail,user){
    if(user.email.length > longestEmail.length){
        return user.email;
    }else{
        return longestEmail;
    }
} ,"");
console.log(userLongEmail);

let listOfNames = users.reduce(function (allNames,user){
    return (allNames + user.name + ", ");
} ,[]);

console.log(listOfNames);

// let uniqueLanguages = users.reduce(function (setOfuniqueLanguagesSoFar,user) {
//     for (let language of user.languages) {
//         setOfuniqueLanguagesSoFar.add(language)
//     }
//     return setOfuniqueLanguagesSoFar;
// }  , new set());
// console.log(uniqueLanguages);
// });