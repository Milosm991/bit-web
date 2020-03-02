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

// function drop(data, ) {
//     var body = document.querySelector("body");
//     var element = document.createElement("select");
//     for (var i = 0; i < data.length; i++) {
//         var opt = document.createElement("option");
//         opt.textContent = data[i];
//         element.appendChild(opt)
//     }

//     body.appendChild(element);

// }
// drop(["Huawei", "Samsung", "Xiaomi", "iphone"])

// var form = document.querySelector("form");
// function createForm(inp, lab, req) {

//     var input = document.createElement("input");
//     var label = document.createElement("label");
//     var a = document.createTextNode(lab);

//     input.setAttribute("type", inp);
//     label.appendChild(a);
//     if (req) {
//         input.setAttribute("required", "required")
//     }

//     form.appendChild(label);
//     form.appendChild(input);

// }
// createForm("password", "Password")
// createForm("text", "Name", true)
// createForm("email", "Email")

// function button(inp, sub) {
//     var sub = document.createElement(inp)
//     sub.setAttribute("type", "submit")
//     form.appendChild(sub)
// }

// button("input", "submit")

// function addImg(a) {
//     var div = document.querySelector(".slider");

//     for (var i = 0; i < a.length; i++) {
//         var img = document.createElement("img");
//         img.setAttribute("src", a[i])
//         div.appendChild(img);
//     };

//     var b = div.firstElementChild;
//     b.className = "active";
// }
// addImg(["img/coff.jpg", "img/coffee.jpg", "img/image.jpg"]);



// function foo() {
//     function sliderImg() {
//         var c = document.querySelector(".active");
//         c.className = "";
//         var change = c.nextElementSibling;

//         if (change) {
//             change.className = "active";
//         } else {
//             document.querySelector('.slider img').classList.add("active");
//         }
//     }
//     sliderImg()
// }
// setInterval(foo, 2000)