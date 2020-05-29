function checkWidth() {
    if ($(window).width() < 514) {
        $('#menu2').addClass('f-nav');
    } else {
        $('#menu2').removeClass('f-nav');
    }
}

$(window).resize(checkWidth);