import { characters, fetchSingleChar, nextPage, prevPage } from "./data.js"
import { render, renderSingleChar, next, previous, btnNext, btnPrev } from "./ui.js"


const nextP = () => {
    nextPage(next)
}

const prevP = () => {
    prevPage(previous)
}
export const init = () => {
    characters(render)
}

export const profile = () => {
    fetchSingleChar(renderSingleChar)
}

export const nexxt = () => {
    
    btnNext.addEventListener('click', nextP)
}

export const prevv = () => {
    btnPrev.addEventListener('click', prevP)
} 