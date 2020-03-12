"use strict"
// var ;fullUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + input + '&key=' + key;

function handler() {
    var key = "AIzaSyD0JH4_GseJ_vT2rYmalw8_AuXgP29T-Z0";
    var input = document.querySelector('input').value;

    var request = $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=' + input + '&key=' + key,
        method: "GET"
    });

    request.done(function (url) {
        var data = url;
        console.log(data)
        var main = document.querySelector('main')
        main.innerHTML = "";
        for (var i = 0; i < data.items.length; i++) {
            var divVid = document.createElement('div');

            var img = document.createElement("img");
            var parag = document.createElement("h2");
            var descr = document.createElement("p")
            img.setAttribute("src", data.items[i].snippet.thumbnails.default.url);
            parag.textContent = data.items[i].snippet.title
            descr.textContent = data.items[i].snippet.description;
            divVid.setAttribute("data-id", data.items[i].id.videoId)
            divVid.appendChild(img)
            divVid.appendChild(parag)
            divVid.appendChild(descr)
            main.appendChild(divVid)

            divVid.addEventListener("click", function (event) {
                var evvClick = event.currentTarget.dataset.id;
                var article = document.querySelector("article");
                var iframe = document.querySelector("iframe");
                iframe.setAttribute("src", "https://www.youtube.com/embed/" + evvClick)
                article.appendChild(iframe);
            })


        }
    }

    )
}



var button = document.querySelector('button')
button.addEventListener("click", handler)