$(function () {
    console.log("Hello, world");

    $("li:first").addClass("one")

    $("li").addClass("list")

    $("li:even").addClass('active');

    $('li:eq(1)').addClass('backColor')
});