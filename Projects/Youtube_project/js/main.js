
function handler(){
    var key = "AIzaSyD0JH4_GseJ_vT2rYmalw8_AuXgP29T-Z0";
    var input = document.querySelector("input").value;

    request = $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=' + input + '&key=' + key,
        method: "GET"
    });
    
    
    request.done(function(response){
        console.log(response);
        var data = response;       
        var main = document.querySelector('main');
        main.innerHTML= "";

        for(var i=0; i<data.items.length; i++){
            var div = document.createElement('div');
            var img = document.createElement('img');
            var title = document.createElement("h2");
            var desc = document.createElement('p');
            img.setAttribute("src", data.items[i].snippet.thumbnails.default.url);
            title.textContent = data.items[i].snippet.title;
            desc.textContent = data.items[i].snippet.description;
            div.setAttribute("data-id", data.items[i].id.videoId)
            div.className = "video";
            img.className="thumb";
            div.appendChild(img)
            div.appendChild(title)
            div.appendChild(desc)
            main.appendChild(div)

            div.addEventListener('click', function(event){
                var clicck = event.currentTarget.dataset.id;
                var article = document.querySelector('article');
                var iframe = document.querySelector('iframe');
                iframe.setAttribute("src", "https://www.youtube.com/embed/" + clicck);
                article.appendChild(iframe);
            })
        }
        
    })
}

var btn = document.querySelector("button");
btn.addEventListener("click", handler)

