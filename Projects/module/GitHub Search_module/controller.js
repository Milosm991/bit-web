import { users, repos } from './data.js'
import { btn, value, render, renderRepo, listRep, div } from './ui.js'

const search = () => {
    const val = value();
    users(val, render)
}

const reposit = () => {
    const repp = listRep();
    repos(repp, renderRepo)
}

export const init = () => {
    btn.addEventListener('click', search)

}

export const rep = () => {
    div.addEventListener('click', reposit)
}