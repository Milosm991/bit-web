let nextt = document.querySelector('.next')
let prev = document.querySelector('.prev')
let count = 1;


const characters = $.ajax({
    url: `https://rickandmortyapi.com/api/character/`,
    method: "GET"
});

characters.done(function(){
    let data = JSON.parse(characters.responseText);

    console.log(data);

    let main = document.querySelector(".row")
    for(let i =0; i<data.results.length; i++){
        let div = document.createElement('div');
        let para = document.createElement('p');
        let img = document.createElement('img');
        let link = document.createElement('a');
        let button = document.createElement('button')
        // let like = document.querySelector('i');
        button.className = "like";
        para.className = "name"
        div.className = "col";
        link.setAttribute('href', "profile.html?id=" + data.results[i].id);
        img.setAttribute('src', data.results[i].image);
        para.textContent = data.results[i].name;
        button.textContent = 'Like';
        div.appendChild(img);
        div.appendChild(para);
        div.appendChild(button)
        link.appendChild(div)
        main.appendChild(link);
    }
    

});

let next = function(){
    if(count===25){
        alert('Go back!')
        return
    }
    count ++;

    const characters = $.ajax({
        url: `https://rickandmortyapi.com/api/character/?page=`+ count,
        method: "GET"
    });
    
    characters.done(function(){
        let data = JSON.parse(characters.responseText);
    
        console.log(data);
        
        let main = document.querySelector(".row")
        main.innerHTML='';
        for(let i =0; i<data.results.length; i++){
            let div = document.createElement('div');
            let para = document.createElement('p');
            let img = document.createElement('img');
            let link = document.createElement('a');
            let button = document.createElement('button')
            para.className = "name"
            div.className = "col";
            link.setAttribute('href', "profile.html?id=" + data.results[i].id);
            img.setAttribute('src', data.results[i].image);
            para.textContent = data.results[i].name;
            button.textContent = 'Like';
            div.appendChild(img);
            div.appendChild(para);
            div.appendChild(button)
            link.appendChild(div)
            main.appendChild(link);
        }
    })
}

let previous = function(){
    if(count===1){
        alert('Go forward!')
        return
    }
    count --;

    const characters = $.ajax({
        url: `https://rickandmortyapi.com/api/character/?page=`+ count,
        method: "GET"
    });
    
    characters.done(function(){
        let data = JSON.parse(characters.responseText);
    
        console.log(data);
        
        let main = document.querySelector(".row")
        main.innerHTML='';
        for(let i =0; i<data.results.length; i++){
            let div = document.createElement('div');
            let para = document.createElement('p');
            let img = document.createElement('img');
            let link = document.createElement('a');
            let button = document.createElement('button')
            para.className = "name"
            div.className = "col";
            link.setAttribute('href', "profile.html?id=" + data.results[i].id);
            img.setAttribute('src', data.results[i].image);
            para.textContent = data.results[i].name;
            button.textContent = 'Like';
            div.appendChild(img);
            div.appendChild(para);
            div.appendChild(button)
            link.appendChild(div)
            main.appendChild(link);
        }
    })
}

nextt.addEventListener("click", next)
prev.addEventListener('click', previous)