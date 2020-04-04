import { fetch } from './fetch.js'

export const users = (input, onSuccsess) => {
    fetch(`https://api.github.com/search/users?q=${input}`, (user) => {
        onSuccsess(user)
    })
}

export const repos = (user, onSuccsess) => {
    fetch(`https://api.github.com/users/${user}/repos`, (repos) => {
        onSuccsess(repos)
    })
}