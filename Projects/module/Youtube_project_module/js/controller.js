import { button, inputVal, render } from './ui.js'
import { videos } from './data.js'

const search = () => {
    const inp = inputVal()
    videos(inp, render)
}
export const init = () => {
    button.addEventListener('click', search)
}