import { render, id, renderShow, renderSeasons, renderCasts, searchItems, searchValue, searchField } from './ui.js'
import { shows, singleShow, seasons, casts, search } from './data.js'


const searchh = () => {
    let quee = searchValue();
    search(quee, (items) => searchItems(items))
}
export const init = () => {
    shows((showss) => render(showss))
}

export const info = () => {
    singleShow(id, (show) => renderShow(show))
}

export const infoSeasons = () => {
    seasons(id, (seasons) => renderSeasons(seasons))
}

export const infoCasts = () => {
    casts(id, (casts) => renderCasts(casts))
}

export const searchShows = () => {
    searchField().addEventListener('keyup', searchh)
}