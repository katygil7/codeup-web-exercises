(async function (){
    const options = {
        method: 'GET',
        header: {
            "Authorization": MY_GITHUB_API_KEY
        }
    };
    const user = document.querySelector("#users");
    const url = `https://api.github.com/users`
    //make the search bar work
    const button = document.querySelector("#button");
    const userInput = document.querySelector("#inputText")


    //this function is to fetch all usersnames

    function getGitUserNames (){
        return fetch(url, options)
            .then(response => response.json())
            .catch(function (error){
                console.log("ERROR: " +error);
            });
    }
    const AllUsers = await getGitUserNames();


//    this function is to specific get inform about one username
    function getGithubUsernames() {
        return fetch('https://api.github.com/users', options)
            .then(response => response.json())
            .catch(function(error) {
                console.warn("ERROR: " + error);
            });
    }
    //
    function getGithubUsernameLastCommit(username) {
        return fetch(`https://api.github.com/users/${username}/events/public`, options)
            .then(response => response.json())
            .catch(function(error) {
                console.warn("ERROR: " + error);
            });
    }

    const username = await getGithubUsernameLastCommit('katygil7')

    console.log(username);


})();