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