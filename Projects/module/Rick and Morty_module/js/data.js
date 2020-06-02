import { id, count, render, renderSingleChar, next, previous } from './ui.js'

export const characters = () => {
    fetch(`https://rickandmortyapi.com/api/character/`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.json().message)
            }
        })
        .then(data => render(data))
        .catch(err => console.log(err));
}

export const fetchSingleChar = () => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.json().message)
            }
        })
        .then(data => renderSingleChar(data))
        .catch(err => console.log(err));
}

export const nextPage = () => {
    let x = count
    ++x
    if (count === 25) {
        alert('Go back!')
        return
    }
    fetch(`https://rickandmortyapi.com/api/character/?page=${x}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.json().message)
            }
        })
        .then(data => next(data))
        .catch(err => console.log(err));
}

export const prevPage = () => {
    let x = count
    --x
    if (count === 1) {
        alert('Go forward!')
        return
    }
    fetch(`https://rickandmortyapi.com/api/character/?page=${x}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.json().message)
            }
        })
        .then(data => previous(data))
        .catch(err => console.log(err));
}