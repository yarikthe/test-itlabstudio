AOS.init();
$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});
$(document).ready(function () {
    $(".navbar-nav a").click(function (e) {
        e.preventDefault();
        $(".navbar-nav a").removeClass("active");
        $($(this).attr('href')).addClass('active');
        $(this).addClass("active");
    });
});