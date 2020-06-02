import { id, count, render, renderSingleChar, next, previous } from './ui.js'
import { request } from './fetch.js'

export const characters = () => {
    request(`https://rickandmortyapi.com/api/character/`, render)
}

export const fetchSingleChar = () => {
    request(`https://rickandmortyapi.com/api/character/${id}`, renderSingleChar)
}

export const nextPage = () => {
    let x = count
    ++x
    if (count === 25) {
        alert('Go back!')
        return
    }
    request(`https://rickandmortyapi.com/api/character/?page=${x}`, next)
}

export const prevPage = () => {
    let x = count
    --x
    if (count === 1) {
        alert('Go forward!')
        return
    }
    request(`https://rickandmortyapi.com/api/character/?page=${x}`, previous)
}