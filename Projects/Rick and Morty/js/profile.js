let query = window.location.search;
query.toString()
let id = query.slice(4);

let name = document.querySelector('h1')
const singleChar = $.ajax({
    url: `https://rickandmortyapi.com/api/character/`+ id,
    method: "GET"
});

singleChar.done(function(){
    let data = JSON.parse(singleChar.responseText);
    console.log(data);
        let div = document.querySelector(".profile")
        let img = document.createElement("img");
        img.setAttribute("src", data.image)
        img.className = "profimg"
        div.appendChild(img)
        name.textContent = data.name
        $('.status').append(data.status)
        $('.species').append(data.species)
        $('.type').append(data.type)
        $('.gender').append(data.gender)
        $('.origin').append(data.origin.name)
        $('.location').append(data.location.name)
})