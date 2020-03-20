var query = window.location.search;
console.log(query);

query.toString()
var id = query.slice(4);


var request1 = $.ajax({
    url: "http://api.tvmaze.com/shows/" + id,
    method: "GET"
});
request1.done(function(response) {

    var data = response;
    var head = document.querySelector("h1")
    var poster = document.querySelector(".poster")
    var div = document.createElement("div")
    var image = document.createElement("img")
    var descr = document.querySelector(".description")

    head.textContent = data.name
    image.setAttribute("src", data.image.medium)
    image.className = "post"
    descr.innerHTML = data.summary;
    div.appendChild(image)
    poster.appendChild(div)
});

var seasonsRequest = $.ajax({
    url: "http://api.tvmaze.com/shows/" + id + "/seasons",
    method: "GET"
});
seasonsRequest.done(function(response) {
    var data2 = response;
    console.log(data2)
    var about = document.querySelector('.about')
    var season = document.createElement('h2')
    season.textContent = "Seasons" + "(" + data2.length + ")";
    about.appendChild(season)
    var ul = document.createElement("ul")
    for (var i = 0; i < data2.length; i++) {

        var li = document.createElement('li')
        li.textContent = data2[i].premiereDate + "-" + data2[i].endDate
        ul.appendChild(li)
        about.appendChild(ul)
    }
})


var castsRequest = $.ajax({
    url: "http://api.tvmaze.com/shows/" + id + "/cast",
    method: "GET"
});
castsRequest.done(function(response) {
    var data1 = response;
    var about = document.querySelector('.about')
    var title = document.createElement('h2')
    
    title.textContent = "Casts";
    about.appendChild(title)
    var ul = document.createElement("ul")
    for (var i = 0; i < data1.length; i++) {

        var li = document.createElement('li')
        li.textContent = data1[i].person.name;
        ul.appendChild(li)
        about.appendChild(ul)
    }
})


