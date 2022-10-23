$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 500) {
        $('#tripsContainer').addClass('animate__animated animate__bounceIn')
    }
});