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

    fetchUserData(info);
    
};
    //Call Async ()
        githubFetch();

// ASYNC FUNCTIONS ABOVE THIS LINE//


// FUNCTIONS BELOW THIS LINE//

//Fetch User Data from GitHub
const fetchUserData = function (info) {

    //Create a new div and git it class of "user-info"
    const div = document.createElement("div");
    div.classList.add(".user-info");
    div.innerHTML = `
        <figure>
          <img alt="user avatar" src=${info.avatar_url} />
        </figure>
        <div>
          <p><strong>Name:</strong> ${info.name}</p>
          <p><strong>Bio:</strong> ${info.bio}</p>
          <p><strong>Location:</strong> ${info.location}</p>
          <p><strong>Number of public repos:</strong> ${info.public_repos}</p>
        </div> `

    introOverview.append(div);
};




// FUNCTIONS ABOVE THIS LINE//