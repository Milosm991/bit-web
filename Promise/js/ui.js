export let button = document.querySelector('button');
let div = document.querySelector('.joke')
let par = document.createElement('p')
div.innerHTML = ''

export const renderJoke = (joke) => {



    par.textContent = joke.value
    div.appendChild(par)

}