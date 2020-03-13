var query = window.location.search;
query.toString()
var id = query[query.length - 1];
console.log(id)

var request1 = $.ajax({
    url: "http://api.tvmaze.com/shows/" + id,
    method: "GET"
});
request1.done(function (response) {
    var data = response;
    console.log(data);


    var body = document.querySelector("body")
    var div = document.createElement("div")
    var image = document.createElement("img")
    image.setAttribute("src", data.image.medium)
    div.appendChild(image)
    body.appendChild(div)
})