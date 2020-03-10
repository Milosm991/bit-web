var xml = new XMLHttpRequest();
xml.open("GET", "http://www.geoplugin.net/xml.gp?ip=109.122.89.100");
xml.send();

xml.onload = function () {
    // console.log(xml);

    var body = document.querySelector("body");
    var xmlDoc = xml.responseXML;
    var form = xmlDoc.querySelector("geoplugin_city").textContent;
    var p = document.createElement('p');
    p.textContent = form;
    body.appendChild(p);


}

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