// function sellUn() {
//     document.getElementById('second').className = "drugi"
// }
// sellUn();

// function selAl() {
//     var elements = document.getElementsByTagName('li');

//     for (var i = 0; i < elements.length; i++) {
//         elements[i].className = "list"
//     }
// }
// selAl();

// function upper() {
//     var b = document.querySelectorAll("#third li");
//     for (var i = 0; i < b.length; i++) {
//         b[i].className = "new-list"
//     }

// }
// upper()

// function select() {
//     var a = document.querySelector(".active");
//     a.className = "";
//     var b = a.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
//     b.className = "active"

// }
// // select()

// function navg() {
//     var a = document.querySelector("#nav")
//     var b = a.firstElementChild.textContent
//     alert(b);
// }
// navg();

// function replace(text) {
//     var c = document.querySelector("#nav")
//     var d = c.lastElementChild.textContent = text;
// }
// replace("Hello");

function drop(data, ) {
    var body = document.querySelector("body");
    var element = document.createElement("select");
    var data = ["Huawei", "Samsung", "Xiaomi"];
    for (var i = 0; i < data.length; i++) {
        var opt = document.createElement("option");
        opt.textContent = data[i];
        element.appendChild(opt)
    }

    body.appendChild(element);

}
drop()