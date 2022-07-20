(async function (){
    const options = {
        method: 'GET',
        header: {
            "Authorization": MY_GITHUB_API_KEY
        }
    };
    const user = document.querySelector("#users");
    const url = `https://api.github.com/users`
    //this function is to fetch all usersnames
    function getGitUserNames (){
        return fetch(url, options)
            .then(response => response.json())
            .catch(function (error){
                console.log("ERROR: " +error);
            });
    }
    const users = await getGitUserNames();
//    this function is to specific get inform about one username




})();