const key = "AIzaSyD0JH4_GseJ_vT2rYmalw8_AuXgP29T-Z0";
import { fetchVid } from './fetch.js'

export const videos = (input, onSucc) => {
    fetchVid(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${input}&key=${key}`, (videos) => {
        onSucc(videos)
    })
}

