/////////// First <div> ///////////

/////////////                ////////////////


// $("body").append("<div id='first-div'></div>");

// var divOne = $("div#first-div")

// var imgArray = ["./img/picOne.jpg",
//     "./img/picTwo.jpg",
//     "./img/picThree.jpg",
//     "./img/picFourth.jpg",
//     "./img/picFive.jpg",
//     "./img/picSix.jpg",
// ];

// for (var i = 0; i < imgArray.length - 3; i++) {
//     divOne.append('<img>');
//     var image = $('img:last');
//     image.attr("src", imgArray[i]);
// }


// //////////// Second <div> ////////////
// $("body").append("<div id='second-div'></div>");

// var divTwo = $("div#second-div")

// for (var i = 3; i < imgArray.length; i++) {
//     divTwo.append('<img>');
//     var image = $('img:last');
//     image.attr("src", imgArray[i]);
// }


////////////////////               ajax exercise        ////////////////


// function handler1() {
//     var getInput = document.querySelector('input').value;
//     console.log(getInput)
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.open("GET", "http://www.geoplugin.net/xml.gp?ip=" + getInput);
//     xmlhttp.send();

//     xmlhttp.onload = function () {
//         var getCountry = xmlhttp.responseXML.querySelector("geoplugin_countryName").textContent;

//         $("body").append("<h1></h1>");
//         $("h1").append(getCountry);
//     }
// }
// var btn = document.querySelector("button")

// btn.addEventListener("click", handler1);


//////////////////////////              json             ///////////////////////
// function handler1() {

//     var body = $("body");
//     var request = new XMLHttpRequest();
//     request.open('GET', 'https://dog.ceo/api/breed/african/images/random');

//     request.onload = function () {
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         var img = $("<img>");
//         img.attr("src", data.message);
//         body.append(img);

//     };

//     request.send();
// }
// var btn = document.querySelector("button")
// btn.addEventListener("click", handler1)


/////////////             json             ////////////////       
// function handler1() {
//     var att = document.querySelector('select').value;
//     var div = document.querySelector('div');
//     var body = $("body");
//     var request = new XMLHttpRequest();
//     request.open('GET', "https://dog.ceo/api/breed/" + att + "/images/random");

//     request.onload = function () {
//         var data = JSON.parse(request.responseText);
//         var img = $("<img>");

//         img.attr("src", data.message);
//         $("div").html(img);
//         body.append(div);
//     };

//     request.send();
// }

// setInterval(handler1, 1000);

/////////////////

// var request = new XMLHttpRequest();
// request.open('GET', "https://api.github.com/users?since=135");

function handler() {
    var input = document.querySelector("input").value;

    var request = $.ajax({
        url: "https://api.github.com/users?since=135",
        method: "POST",
        data: { id: 1 },
        dataType: "html"
    });

    request.done(function (msg) {
        $("#log").html(msg);
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

    var search = document.querySelector("input")
    search.addEventListener("click", handler)

}