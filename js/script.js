//GLOBAL VARIABLES//

// Bio section variable
const introOverview = document.querySelector(".overview");
//Vanesa's GitHub username
const username = "vanesa5"; 



// ASYNC FUNCTIONS BELOW THIS LINE//

const githubFetch = async function () {
    const res = await fetch(`https://api.github.com/user${username}`); //targeted user/username with template literals (`....`)
    const info = await res.json();
    console.log(info);
};




// FUNCTIONS BELOW THIS LINE//