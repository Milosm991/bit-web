import { characters, fetchSingleChar, nextPage, prevPage } from "./data.js"
import { btnNext, btnPrev } from "./ui.js"


const nextP = () => {
    nextPage()
}

const prevP = () => {
    prevPage()
}
export const init = () => {
    characters()
}

export const profile = () => {
    fetchSingleChar()
}

export const nexxt = () => {

    btnNext.addEventListener('click', nextP)
}

export const prevv = () => {
    btnPrev.addEventListener('click', prevP)
} 