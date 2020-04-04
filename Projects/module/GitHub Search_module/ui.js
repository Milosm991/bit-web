export const btn = document.querySelector('button')
export const input = () => document.querySelector('input');
export const value = () => input().value;
export const listRep = () => event.currentTarget.querySelector('p').textContent;
let main = document.querySelector("main")
export const div = document.querySelector("div")

export const render = (users) => {
   
    for (let i = 0; i < users.items.length; i++) {
        let img = document.createElement("img")
        let name = document.createElement("p")
        let divv = document.createElement("div")
        divv.className = "user"
        img.setAttribute("src", users.items[i].avatar_url)
        name.textContent = users.items[i].login
        divv.appendChild(img)
        divv.appendChild(name)
        div.appendChild(divv)
        main.appendChild(div)
    }
}

export const renderRepo = (repos) => {

    let section = document.querySelector("section");
    
    for (let i = 0; i < repos.length; i++) {
        
        let divR = document.createElement("div");
        divR.className = "repo";
        divR.textContent = repos[i].name;
        section.appendChild(divR)
    }
}