var body = document.querySelector("body");

var marioRun = document.querySelector(".runMario")
var mario = document.querySelector(".mario");
var interval;
var value = 0;

var moving = function () {
    body.style.backgroundPositionX = value + "px";
}

var moveMario = function (event) {
    if (event.keyCode === 39) {
        marioRun.className = "marioRR";
        mario.className = "active";
        value--;
        interval = setInterval(moving, 20);
    }


}

var moveMario1 = function (event) {
    if (event.keyCode === 39) {
        marioRun.className = "active";
        mario.className = "marioRR";
        clearInterval(interval)
    }

}

var moveMario2 = function (event) {
    if (event.keyCode === 37) {
        marioRun.className = "activeleft";
        mario.className = "active";
        value++;
        interval = setInterval(moving, 20);
    }


}

var moveMario3 = function (event) {
    if (event.keyCode === 37) {
        marioRun.className = "active";
        mario.className = "activeleft";
        clearInterval(interval)
    }
}
body.addEventListener("keydown", moveMario)
body.addEventListener("keyup", moveMario1)
body.addEventListener("keydown", moveMario2)
body.addEventListener("keyup", moveMario3)

// function startMoving(event) {
//     if (event.keyCode === 39) {
//         mario.classList.add("moving")

//         setInterval(moveBackground, 10)
//     }
// }

// function stopMoving(event) {
//     if (event.keyCode === 39) {
//         mario.classList.remove("moving")
//         clearInterval(interval)
//     }
// }
// function moveBackground() {
//     body.style.backgroundPosition = value + "px";
// }

// body.addEventListener("keydown", startMoving)
// body.addEventListener("keyup", stopMoving)