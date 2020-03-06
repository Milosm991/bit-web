$(function () {
    var images = ["./images/Boaci.png", "./images/Borjan.png", "./images/Nikolic.png",
        "./images/Vukanovic.png", "./images/Vulic.png"];

    for (var i = 0; i < images.length; i++) {
        var img = $('<img>');
        $('div').append(img);


    }
    var randomNumb = function () {
        return Math.floor((300 - 50) * Math.random()) + 50


    }
    $("img").each(function (index, element) {
        var res = randomNumb();
        $(element).attr("src", images[index])
        $(element).css("width", res + 'px')
    })
    $('div').before('<h2>RED <span>STAR</span></h2>')
    $('h2').addClass('style')




});