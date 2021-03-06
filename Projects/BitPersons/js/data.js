import { renderPerson, search } from './ui.js'

export const persons = () => {
    localStorage.setItem("time", new Date().getTime())
    const load = document.querySelector(".load");
    load.style.display = "block";
    const cards = document.querySelector('.cards');
    cards.style.display = 'none';
    fetch('https://randomuser.me/api/?results=15')
        .then(response => response.json())
        .then(people => {
            let a = localStorage.getItem('persons');
            let data = JSON.parse(a)
            console.log(data);

            if (data) {
                renderPerson(data)
            } else {
                renderPerson(people)
            }

            localStorage.setItem("persons", JSON.stringify(people))
        })
        .catch(err => console.log(err))
}

