async function findGithubUser(user) {
    return await fetch(`https://api.github.com/users/${user}`)
}

const form = document.querySelector("form").addEventListener("submit", el => {
    el.preventDefault();
    DisplayingUserData();
})

async function DisplayingUserData(){
    let searchInput = document.querySelector("input#username-input").value;
    const infos = document.querySelectorAll(".info");
    const usernameText = document.querySelector("h2#username");
    const avatarIMG = document.querySelector("img#avatar");

    try {
        const githubResponse = await findGithubUser(searchInput);
        const data = await githubResponse.json();
        avatarIMG.src = data.avatar_url;
        usernameText.innerHTML = data.login;
        for (let index = 0; index < infos.length; index++) {
            switch (index) {
                case 0:
                    infos[index].innerHTML = `${data.followers} seguidores`;
                    break;
                case 1:
                    infos[index].innerHTML = `${data.following} seguindo`;
                    break;
                case 2:
                    infos[index].innerHTML = `${data.public_repos} repositórios`;
                    break;
                case 3:
                    infos[index].innerHTML = data.company;
                    break;
                case 4:
                    infos[index].innerHTML = data.location;
                    break;
                default:
                    break;
            }
        }

    } catch (err) {
        console.error(err);
    }
}