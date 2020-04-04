let cont = document.querySelector(".main")  
let query = window.location.search;
query.toString()
export let id = query.slice(4);
let form = document.querySelector("form");
export let searchField = () => document.querySelector(".form-control");
export let searchValue = () => searchField().value;

/////////////////// SHOWS //////////////////
export const render = (showws) => {

    for (let i = 0; i < 50; i++) {
        let newDiv = document.createElement("div");
        let img = document.createElement('img');
        let name = document.createElement("h3")
        let link = document.createElement("a")
        link.setAttribute("href", "showInfo.html?id=" + showws[i].id)
        img.setAttribute("src", showws[i].image.medium)
        name.textContent = showws[i].name
        newDiv.appendChild(img)
        newDiv.appendChild(link)
        link.appendChild(name)
        cont.appendChild(newDiv)
    }
}
//////////////////// SINGLE ////////////////////////
export const renderShow = (show) => {
    let head = document.querySelector("h1")
    let poster = document.querySelector(".poster")
    let div = document.createElement("div")
    let image = document.createElement("img")
    let descr = document.querySelector(".description")

    head.textContent = show.name
    image.setAttribute("src", show.image.medium)
    image.className = "post"
    descr.innerHTML = show.summary;
    div.appendChild(image)
    poster.appendChild(div)
}
///////////////////// SEASONS /////////////////////////
export const renderSeasons = (seasons) => {
    let about = document.querySelector('.about')
    let season = document.createElement('h2')
    season.textContent = "Seasons" + "(" + seasons.length + ")";
    about.appendChild(season)
    let ul = document.createElement("ul")
    for (let i = 0; i < seasons.length; i++) {

        let li = document.createElement('li')
        li.textContent = seasons[i].premiereDate + "-" + seasons[i].endDate
        ul.appendChild(li)
        about.appendChild(ul)
    }
}
///////////////////// CASTS ////////////////////////
export const renderCasts = (casts) => {
    let about = document.querySelector('.about')
    let title = document.createElement('h2')
    
    title.textContent = "Casts";
    about.appendChild(title)
    let ul = document.createElement("ul")
    for (let i = 0; i < casts.length; i++) {

        let li = document.createElement('li')
        li.textContent = casts[i].person.name;
        ul.appendChild(li)
        about.appendChild(ul)
    }
}
//////////////////////// QUERY /////////////////////
export const searchItems = (items) => {
    let ul = document.createElement("ul")
        ul.classList = "searchul";
        ul.innerHTML="";

        for(let i =0; i<10; i++){
            let li = document.createElement("li");
            li.classList = "search";
            let link = document.createElement("a");
            link.setAttribute("href", "showInfo.html?id=" + items[i].show.id);

            li.textContent = items[i].show.name;

            link.appendChild(li);
            ul.appendChild(link);
            form.appendChild(ul);
        }
}