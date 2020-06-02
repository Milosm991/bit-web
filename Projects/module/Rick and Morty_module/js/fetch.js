export const request = (url, onSucc) => {
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.json().message)
            }
        })
        .then(data => onSucc(data))
        .catch(err => console.log(err));
}

