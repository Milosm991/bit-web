export const fetchChar = (url, onSucc) => {
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.send()

    request.addEventListener('load', () => {
        let response = JSON.parse(request.responseText)
        onSucc(response)
    })
}