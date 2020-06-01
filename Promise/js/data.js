// import { renderJoke } from "./ui"

// const fetchData = new Promise((resolve, reject) => {
//     const req = new XMLHttpRequest();

//     req.open("GET", 'https://api.chucknorris.io/jokes/random');

//     req.onload = () => {
//         if (req.status === 200) {
//             console.log(req)
//             resolve(JSON.parse(req.responseText))
//         } else {
//             reject(JSON.parse(req.responseText).message)
//         }
//     }
//     req.send();
// });

const fetchData = (renderJoke) => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.json().message)
            }
        })
        .then(data => {
            renderJoke(data)
        })
        .catch(error => {
            console.log('Error')
        })
}

export { fetchData }




