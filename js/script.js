//GLOBAL VARIABLES//

// Bio section variable
const introOverview = document.querySelector(".overview");
//Vanesa's GitHub username
const username = "vanesa5"; 
//unorder list to display repos
let repoList = document.querySelector(".repo-list");
//all repo info will apear//
const allRepoInfo = document.querySelector(".repos")
//individual repo data will apear//
const singleRepoInfo = document.querySelector(".repo-data")

//console.log(singleRepoInfo, allRepoInfo);


//END OF GLOBAL VARIABLES//

//--------------------------------------------------------------------


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
    const fetchRepos =  await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    const repos = await fetchRepos.json(); 

    //call function below
    displayRepoInfo(repos);
};
//repoListFetch();

// ASYNC FUNCTIONS ABOVE THIS LINE//


//--------------------------------------------------------------------



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
        listItem.innerHTML = `<h3>${repo.name}</h3>`;
        repoList.append(listItem);

        listItem.classList.add("repo");
    }
};


// FUNCTIONS ABOVE THIS LINE//


//--------------------------------------------------------------------


//EVENT HANDLER BUTTON BELOW THIS LINE

repoList.addEventListener("click", function (e) {

    if (e.target.matches("h3")) {
        let repoName = e.target.innerText;
            //console.log(repoName); //name of clicked repo shows on console
        //Called Fucntions Below
        specificRepoInfo(repoName);
    }
});


//EVENT HANDLER BUTTON ABOVE THIS LINE


//--------------------------------------------------------------------

const specificRepoInfo = async function (repoName) {
    const grabInfo = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
    const repoInfo = await grabInfo.json();
    console.log(repoName);

    //Grab of Languages
    const fetchLanguages = await fetch(`https://api.github.com/repos/${username}/${repoName}/languages`); 
            //other option: = await fetch(repoInfo.languages_url);
    const languageData = await fetchLanguages.json();
        
        console.log(languageData);

    //Array for Languages 
    const languages = [];
    for (const language in languageData) {
        languages.push(language);
    }

    console.log(languages);

    //Call functions below
    displaySpecificRepoInfo(repoInfo, languages);



}; // Unsure if a language-url displays on console with only repoList.EH and specificRepoInfo

//Dispaly Specific Repo Info
 
const displaySpecificRepoInfo = function (repoInfo, languages) {
    singleRepoInfo.innerHTML = "";
    singleRepoInfo.classList.remove("hide");
    allRepoInfo.classList.add("hide");

    const div = document.createElement("div");
    div.innerHTML = `<h3>Name: ${repoInfo.name}</h3>
    <p>Description: ${repoInfo.description}</p>
    <p>Default Branch: ${repoInfo.default_branch}</p>
    <p>Languages: ${languages.join(", ")}</p>
    <a class="visit" href="${repoInfo.html_url}" target="_blank" rel="noreferrer noopener">View Repo on GitHub!</a>`
    
    singleRepoInfo.append(div);
};



