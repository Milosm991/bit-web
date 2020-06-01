import { lastUpdate } from "./controller.js";

export const ul = document.querySelector('.persons');
export const card = document.querySelector('.ppl');
let counter = document.querySelector('.counter');
export const cards = document.querySelector('.cards');
export const grid = document.querySelector('.grid');
export const list = document.querySelector('.list');
export const main = document.querySelector('.main');
export const input = () => document.querySelector('.src');
export const inputVal = () => input().value
const lastSeen = document.querySelector('.timer')

function hideEmail(email) {
    const array = email.split('@');
    array[0] = array[0].slice(0, 3) + '...' + array[0].slice(-3);
    return array.join('@');
}

export const renderPerson = (persons) => {

    let male = 0;
    let female = 0;

    persons.results.forEach(element => {

        let dateOfBirth = new Date(element.dob.date);

        if (element.gender === 'female') {
            female++;
        } else {
            male++;
        }
        let stats = `<p>Male: ${male}, Female: ${female}</p>`;
        counter.innerHTML = stats;
        let genderr = element.gender === "female" ? "female" : "";

        let listView = `
            <li class='${genderr}'>
                <div class='avatar'>
                    <img src='${element.picture.thumbnail}'>
                </div>
            
                <div class='info'>
                    <p><b><i>${element.name.first} ${element.name.last}</i></b></p>
                    <p><i class="fa fa-envelope"></i> Email: ${hideEmail(element.email)}</p>
                    <p><i class="fa fa-birthday-cake"></i> Birth Date: ${dateOfBirth.getDate()}.${dateOfBirth.getMonth() + 1}.${dateOfBirth.getFullYear()}</p>
                </div>
            </li>
            `

        ul.innerHTML += listView;

        const load = document.querySelector(".load");
        load.style.display = "none";


        let gender = element.gender === "female" ? "female" : "";
        let cardP = `
            <div class="col-sm-12 col-md-6 col-xl-4">
                    <div class="card">
                        <img src="${element.picture.medium}" class="card-img-top">
                        <div class="card-body ${gender}">
                            <p><b><i>${element.name.first} ${element.name.last}</i></b></p>
                            <p class="card-title"><i class="fa fa-envelope"></i> Email: ${hideEmail(element.email)}</p>
                            <p class="card-text"><i class="fa fa-birthday-cake"></i> Birth Date: ${dateOfBirth.getDate()}.${dateOfBirth.getMonth() + 1}.${dateOfBirth.getFullYear()}</p>
                        </div>
                    </div>
            </div>`;

        card.innerHTML += cardP;

    });

}
lastSeen.innerHTML = `<i><b>Last update: ${lastUpdate()}</b></i>`

export const search = () => {
    const inp = inputVal().toLowerCase()
    console.log(inp);

    const data = JSON.parse(localStorage.getItem("persons"))

    const ppl = data.results.filter(element => {
        if (element.name.first.toLowerCase().indexOf(inp) != -1 || element.name.last.toLowerCase().indexOf(inp) != -1) {
            return true
            // } else {
            //      main.innerHTML = `<img src='../img/nothing.png'>`
        }
    })
    singPers(ppl)

}

const singPers = (ppl) => {

    let male = 0;
    let female = 0;

    ul.innerHTML = ''
    card.innerHTML = ''

    Array.from(ppl).forEach(element => {

        let dateOfBirth = new Date(element.dob.date);

        if (element.gender === 'female') {
            female++;
        } else {
            male++;
        }

        let stats = `<p>Male: ${male}, Female: ${female}</p>`;
        counter.innerHTML = stats;
        let genderr = element.gender === "female" ? "female" : "";

        let listView = `
            <li class='${genderr}'>
                <div class='avatar'>
                    <img src='${element.picture.thumbnail}'>
                </div>
            
                <div class='info'>
                    <p><b><i>${element.name.first} ${element.name.last}</i></b></p>
                    <p><i class="fa fa-envelope"></i> Email: ${hideEmail(element.email)}</p>
                    <p><i class="fa fa-birthday-cake"></i> Birth Date: ${dateOfBirth.getDate()}.${dateOfBirth.getMonth() + 1}.${dateOfBirth.getFullYear()}</p>
                </div>
            </li>
            `

        ul.innerHTML += listView;

        const load = document.querySelector(".load");
        load.style.display = "none";


        let gender = element.gender === "female" ? "female" : "";
        let cardP = `
            <div class="col-sm-12 col-md-6 col-xl-4">
                    <div class="card">
                        <img src="${element.picture.medium}" class="card-img-top">
                        <div class="card-body ${gender}">
                            <p><b><i>${element.name.first} ${element.name.last}</i></b></p>
                            <p class="card-title"><i class="fa fa-envelope"></i> Email: ${hideEmail(element.email)}</p>
                            <p class="card-text"><i class="fa fa-birthday-cake"></i> Birth Date: ${dateOfBirth.getDate()}.${dateOfBirth.getMonth() + 1}.${dateOfBirth.getFullYear()}</p>
                        </div>
                    </div>
            </div>`;

        card.innerHTML += cardP;

    }
    )
}