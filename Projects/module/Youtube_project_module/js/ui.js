export const button = document.querySelector('button')
export const input = () => document.querySelector("input");
export const inputVal = () => input().value;


export const render = (videos) => {
    let main = document.querySelector('main')
    const items = videos.items;
    main.innerHTML= "";
    
    items.forEach(video => {
        let div = document.createElement('div');
        let img = document.createElement('img');
        let title = document.createElement("h2");
        // let desc = document.createElement('p');

        img.setAttribute("src", video.snippet.thumbnails.default.url);
        title.textContent = video.snippet.title;
        // desc.textContent = video.snippet.description;
        div.setAttribute("data-id", video.id.videoId)
        div.className = "video";
        img.className="thumb";
        
        div.appendChild(img)
        div.appendChild(title)
        // div.appendChild(desc)
        main.appendChild(div)

        div.addEventListener('click', function(event){
            let clicck = event.currentTarget.dataset.id;
            let article = document.querySelector('article');
            let iframe = document.querySelector('iframe');
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + clicck);
            article.appendChild(iframe);
        })
    })

}