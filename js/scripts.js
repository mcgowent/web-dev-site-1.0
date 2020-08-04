$(document).ready(function () {
    // all custom jQuery will go here
    console.log("I am Working")
    $(window).scroll(function () {
       var windowHeight = $(window).scrollTop();
       if(windowHeight > 80) {
           $(document).find(".header").addClass("active");
       } else {
           $(document).find(".header").removeClass("active");
       }
    })
    $(".open-close").click(function() {
        $(".ham-menu").toggleClass("active");
    })
});


