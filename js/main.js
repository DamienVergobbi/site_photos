$(document).ready(function() {
    AOS.init();
    $.ajax({
        method: 'GET',
        url: './content/header.html',
        dataType: 'html',
        success: function(data) {
            $('header').html(data);
        },
    });
    $.ajax({
        method: 'GET',
        url: './content/main.html',
        dataType: 'html',
        success: function(data) {
            $('main').html(data);
        },
    });
    $.ajax({
        method: 'GET',
        url: './content/footer.html',
        dataType: 'html',
        success: function(data) {
            $('footer').html(data);
        },
    });
});