import { fetchShows } from './fetch.js'


export const shows = (onSucc) => {
    fetchShows('http://api.tvmaze.com/shows', (showss) => {
        onSucc(showss);
    })
};

export const singleShow = (id, onSucc) => {
    fetchShows(`http://api.tvmaze.com/shows/${id}`, (show) => {
        onSucc(show)
    })
}

export const seasons = (id, onSucc) => {
    fetchShows(`http://api.tvmaze.com/shows/${id}/seasons`, (seasons) => {
        onSucc(seasons)
    })
}

export const casts = (id, onSucc) => {
    fetchShows(`http://api.tvmaze.com/shows/${id}/cast`, (casts) => {
        onSucc(casts)
    })
} 

export const search = (querry, onSucc) => {
    fetchShows(`http://api.tvmaze.com/search/shows?q=${querry}`, (items) => {
        onSucc(items)
    })
}