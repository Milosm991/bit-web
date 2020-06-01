import { button, renderJoke } from './ui.js';
import { fetchData } from './data.js';

// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         const req = new XMLHttpRequest();
//         req.open("GET", 'https://api.chucknorris.io/jokes/random');

//         req.onload = () => {
//             if (req.status === 200) {
//                 console.log(req)
//                 resolve(JSON.parse(req.responseText))
//             } else {
//                 reject(JSON.parse(req.responseText).message)
//             }
//         }
//         req.send();
//     });
// }

button.addEventListener("click", () => {
    console.log("Clicked")
    // fetchData().then((data) => {
    //     renderJoke(data);
    // })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    fetchData(renderJoke)
})
