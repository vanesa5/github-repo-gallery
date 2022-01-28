//GLOBAL VARIABLES//

// Bio section variable
const introOverview = document.querySelector(".overview");
//Vanesa's GitHub username
const username = "vanesa5"; 
//unorder list to display repos
let repoList = document.querySelector(".repo-list");


//END OF GLOBAL VARIABLES//


// ASYNC FUNCTIONS BELOW THIS LINE//

const githubFetch = async function () {
    const res = await fetch(`https://api.github.com/users/${username}`); //targeted user/username with template literals (`....`)
    const info = await res.json();
    console.log(info);

    fetchUserData(info);
    
};
    //Call Async ()
        githubFetch();


const repoListFetch = async function () {
    const fetchRepos =  await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await fetchRepos.json(); 

    //call function below
    displayRepoInfo(repos);
};
//repoListFetch();

// ASYNC FUNCTIONS ABOVE THIS LINE//


// FUNCTIONS BELOW THIS LINE//

//Fetch User Data from GitHub
const fetchUserData = function (info) {

    //Create a new div and git it class of "user-info"
    const div = document.createElement("div");
    div.classList.add("user-info");
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

    //call function below
    repoListFetch();
};

const displayRepoInfo = function (repos) {
    for (const repo of repos) {
        const listItem = document.createElement("li");
        listItem.innerText = `<h3>${repo.name}</h3>`;
        repoList.append(listItem);

        listItem.classList.add("repo");
    }
};


// FUNCTIONS ABOVE THIS LINE//