var request = $.ajax({
    url: "http://api.tvmaze.com/shows",
    method: "GET"
});
request.done(function (response) {
    var data = response;
    console.log(data);

    var cont = document.querySelector(".main")
    for (var i = 0; i < 50; i++) {
        var newDiv = document.createElement("div");
        var img = document.createElement('img');
        var name = document.createElement("h3")
        var link = document.createElement("a")
        link.setAttribute("href", "showInfo.html?id=" + data[i].id)
        img.setAttribute("src", data[i].image.medium)
        name.textContent = data[i].name
        newDiv.appendChild(img)
        newDiv.appendChild(link)
        link.appendChild(name)
        cont.appendChild(newDiv)
    }

    console.log(data);

})

