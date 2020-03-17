var request = $.ajax({
    url: "http://api.tvmaze.com/shows",
    method: "GET"
});
request.done(function(response) {
    var data = response;
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


});

var search = function(){
    var form = document.querySelector("form");
    var input = document.querySelector(".form-control");
    var querry = input.value;

    var request1 =new XMLHttpRequest();
        request1.open("GET", "http://api.tvmaze.com/search/shows?q=" + querry);
        request1.send();
    

    request1.onload = function(){
        var data1 = JSON.parse(request1.responseText);
        console.log(data1);
        var ul = document.createElement("ul")
        ul.classList = "searchul";
        ul.innerHTML="";

        for(var i =0; i<10; i++){
            var li = document.createElement("li");
            li.classList = "search";
            var link = document.createElement("a");
            link.setAttribute("href", "showInfo.html?id=" + data1[i].show.id);

            li.textContent = data1[i].show.name;


            link.appendChild(li);
            ul.appendChild(link);
            form.appendChild(ul);
        }
        
    }
}
var input = document.querySelector(".form-control");
input.addEventListener("keyup", search)


////////////////////