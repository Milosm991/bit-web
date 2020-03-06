// function changeColor() {
//     var a = document.querySelector("div");
//     a.classList.toggle("color");
// }

// function turnOff() {
//     var b = document.querySelector(".sec");
//     b.removeAttribute(onclick);

// }

// var chatRoom = document.querySelector(".chat");

// var sendButton = document.querySelector(".sendMes");


//  sendButton.onclick = function () {
//     var message = document.querySelector(".poruka").value;
//     var paragraph = document.createElement("p");
//     var div = document.querySelector(".chat");
//     var p = document.createTextNode(message.value);
//     div.appendChild(p);


// }

// sendText()

$(function () {

    // function movePlayer() {
    //     var a = document.querySelector("body");
    //     var img = document.querySelector("img");

    //     a.addEventListener("click", function (event) {
    //         img.style.left = event.clientX + 'px';
    //         img.style.top = event.clientY + 'px';
    //     })
    // }
    // movePlayer();
    /////////jQuery
    $('body').on('click', function (event) {
        $('img').css({ "top": event.clientY + "px", "left": event.clientX + 'px' });
        // $('img').css("left": event.clientX + 'px');
    })



})



// function stopMov() {

// }
// stopMov()