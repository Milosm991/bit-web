$(function () {
    // var images = ["./images/Boaci.png", "./images/Borjan.png", "./images/Nikolic.png",
    //     "./images/Vukanovic.png", "./images/Vulic.png", "./images/Njegos.png"];

    // for (var i = 0; i < images.length; i++) {
    //     var img = $('<img>');
    //     $('div').append(img);


    // }
    // var randomNumb = function () {
    //     return Math.floor((300 - 50) * Math.random()) + 50


    // }
    // $("img").each(function (index, element) {
    //     var res = randomNumb();
    //     $(element).attr("src", images[index])
    //     $(element).css("width", res + 'px')
    // })
    // $('div').before('<h2>RED <span>STAR</span></h2>')
    // $('h2').addClass('style')



    ///////////////////////////////////////
    var images1 = ["./images/Boaci.png", "./images/Borjan.png", "./images/Nikolic.png",
        "./images/Vukanovic.png", "./images/Vulic.png", "./images/Njegos.png"];

    var firstDiv = $('div.first');
    var secondDiv = $('div.second');

    for (var i = 0; i < images1.length; i++) {
        var img = $("<img>");
        img.attr('src', images1[i]);
        if (i < 3) {
            firstDiv.append(img)
        } else {
            secondDiv.append(img)
        }
    }
    // $('.first img:first').addClass('selected'); drugi nacin
    var border = $('img:eq(1)').addClass('selected');
    $("img").css('width', '30%')

    border.removeClass('selected');
    border.parent('div.first').next('div.second').children('img:odd').addClass('selected');



});