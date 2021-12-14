$(document).ready(function(){
    $(document).on("click", "#btn_scroll", function() {
        $('html, body').animate({
            scrollTop: $("#main_section").offset().top
        }, 500);
    }); // Scroll down on click
});