let query = window.location.search;
query.toString()
export const id = query.slice(4);
let name = document.querySelector('h1')
export let btnNext = document.querySelector('.next')
export let btnPrev = document.querySelector('.prev')
export let count = 1;



export const render = (chara) => {
    let main = document.querySelector(".row")

    for(let i =0; i<chara.results.length; i++){
        let div = document.createElement('div');
        let para = document.createElement('p');
        let img = document.createElement('img');
        let link = document.createElement('a');
        let button = document.createElement('button')
        // let like = document.querySelector('i');
        button.className = "like";
        para.className = "name"
        div.className = "col";
        link.setAttribute('href', "profile.html?id=" + chara.results[i].id);
        link.setAttribute('target', '_blank')
        img.setAttribute('src', chara.results[i].image);
        para.textContent = chara.results[i].name;
        button.textContent = 'Like';
        div.appendChild(img);
        div.appendChild(para);
        div.appendChild(button)
        link.appendChild(div)
        main.appendChild(link);
    }

}

export const renderSingleChar = (singCh) => {
        let div = document.querySelector(".profile")
        let img = document.createElement("img");
        img.setAttribute("src", singCh.image)
        img.className = "profimg"
        div.appendChild(img)
        name.textContent = singCh.name
        $('.status').append(singCh.status)
        $('.species').append(singCh.species)
        $('.type').append(singCh.type)
        $('.gender').append(singCh.gender)
        $('.origin').append(singCh.origin.name)
        $('.location').append(singCh.location.name)

}

export const next = (res) => {
    let main = document.querySelector(".row")
        main.innerHTML='';
        count ++;
        console.log(count);
        for(let i =0; i<res.results.length; i++){
            let div = document.createElement('div');
            let para = document.createElement('p');
            let img = document.createElement('img');
            let link = document.createElement('a');
            let button = document.createElement('button')
            button.className ="like";
            para.className = "name"
            div.className = "col";
            link.setAttribute('href', "profile.html?id=" + res.results[i].id);
            link.setAttribute('target', '_blank')
            img.setAttribute('src', res.results[i].image);
            para.textContent = res.results[i].name;
            button.textContent = 'Like';
            div.appendChild(img);
            div.appendChild(para);
            div.appendChild(button)
            link.appendChild(div)
            main.appendChild(link);
        }
}

export const previous = (abc) => {
        let main = document.querySelector(".row")
        main.innerHTML='';
        count --;
        for(let i =0; i<abc.results.length; i++){
            let div = document.createElement('div');
            let para = document.createElement('p');
            let img = document.createElement('img');
            let link = document.createElement('a');
            let button = document.createElement('button')
            button.className = "like";
            para.className = "name"
            div.className = "col";
            link.setAttribute('href', "profile.html?id=" + abc.results[i].id);
            link.setAttribute('target', '_blank')
            img.setAttribute('src', abc.results[i].image);
            para.textContent = abc.results[i].name;
            button.textContent = 'Like';
            div.appendChild(img);
            div.appendChild(para);
            div.appendChild(button)
            link.appendChild(div)
            main.appendChild(link);
        }
}