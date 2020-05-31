import { grid, list, ul, cards, input, inputVal, main, renderPerson, search } from './ui.js';
import { persons } from './data.js';

export const selectGrid = () => {
    grid.addEventListener('click', () => {
        ul.style.display = 'none';
        cards.style.display = 'block';
        main.style.height = '2060px';
        
        grid.style.display = 'none';
        list.style.display = 'block';
    })
}

export const selectList = () => {
    list.addEventListener('click', () => {
        ul.style.display = 'block';
        cards.style.display = 'none';
        main.style.height = '1110px';

        grid.style.display = 'block';
        list.style.display = 'none';
    })
}

export const serachPersons = () => {
    input().addEventListener('keyup', search)
}

export let lastUpdate = () => {   
    
    const time = localStorage.getItem("time")
    let newTime = new Date().getTime();
    let a = (newTime - time) / 1000;
    let b = '';
    // parseFloat(b)
    console.log(b);
    
    if (a < 60) {
        let c;
        c = Math.floor(a)
        return  `${c} seconds ago`
    }
    if (a > 60) {
        let x = Math.floor(a / 60);
        console.log(x);             
        return b = `${x} minute/s ago`
    }
    if (parseInt(b) > 60) {
        let f;
        return f = `over an hour ago`
    }
}