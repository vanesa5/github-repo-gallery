//GLOBAL VARIABLES//

// Bio section variable
const introOverview = document.querySelector(".overview");
//Vanesa's GitHub username
const username = "vanesa5"; 



// ASYNC FUNCTIONS BELOW THIS LINE//

const githubFetch = async function () {
    const res = await fetch(`https://api.github.com/users/${username}`); //targeted user/username with template literals (`....`)
    const info = await res.json();
    console.log(info);

    
};
    //Call Async ()
    githubFetch();

// ASYNC FUNCTIONS ABOVE THIS LINE//


// FUNCTIONS BELOW THIS LINE//

//Fetch User Data from GitHub
const fetchUserData = function (json) {

};




// FUNCTIONS ABOVE THIS LINE//