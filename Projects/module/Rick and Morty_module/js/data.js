import { fetchChar } from './fetch.js'
import { id, count } from './ui.js'

export const characters = (onSucc) => {
    fetchChar(`https://rickandmortyapi.com/api/character/`, (char) => {
        onSucc(char)
    })
}

export const fetchSingleChar = (onSucc) => {
    fetchChar(`https://rickandmortyapi.com/api/character/${id}`, (single) => {
        onSucc(single)
    })
}

export const nextPage = (onSucc) => {
    if(count===25){
        alert('Go back!')
        return
    }
    fetchChar(`https://rickandmortyapi.com/api/character/?page=${count}`, (np) => {
        onSucc(np)
    })
}

export const prevPage = (onSucc) => { 
    if(count===1){
        alert('Go forward!')
        return
    }
    fetchChar(`https://rickandmortyapi.com/api/character/?page=${count}`, (pp) => {
        onSucc(pp)
    })
}