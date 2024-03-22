const URL = "https://api.github.com/users/"; // Root URL

$("#search").value = "";

// Action when submitting the input
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  if ($("#search").value) {
    getUser($("#search").value);
    $("#search").value = "";
  }
});

// Getting the data through the api and fetch
function getUser(username) {
  fetch(URL + username)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Calling GET method " + res.status);
      }
    })
    .then((data) => {
      createUserCard(data);
      getRepos(username);
    })
    .catch((err) => {
      console.log(err);
      createErrorCard("No profile found with this username");
    });
}

// Create the card
function createUserCard(user) {
  const cardHTML = `
    <div class="card">
      <div>
        <img
          class="avatar"
          src="${user.avatar_url}"
          alt="${user.name}"
        />
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>
          ${user.bio}
        </p>

        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>

      </div>
    </div>
  `;

  $("#main").innerHTML = cardHTML;
}

// Getting Repositories
function getRepos(username) {
  fetch(URL + username + "/repos?sort=created")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Calling GET method " + res.status);
      }
    })
    .then((data) => {
      addReposToCard(data);
    })
    .catch((err) => {
      console.log(err);
      createErrorCard("Problem fetching Repos");
    });
}

// Adding Repos to Card
function addReposToCard(repos) {
  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    repoEl.innerText = repo.name;

    $("#repos").appendChild(repoEl);
  });
}

// Handling Error Messages
function createErrorCard(message) {
  const cardHTML = `
    <div class="card">
      <h1> ${message} </h1>
    </div>
  `;

  $("#main").innerHTML = cardHTML;
}
