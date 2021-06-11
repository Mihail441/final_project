$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});
$(function() {

// scrollTop
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1600);
    return false;
});


// Collapse
$("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('collapse');

    $this.toggleClass("active");
})
})
var acc = document.getElementsByClassName("accordion");
var i;