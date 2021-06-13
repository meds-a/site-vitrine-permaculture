$(document).ready(function () {
    
    $(function () {
        $(window).scroll(function () { 
            if ($(this).scrollTop() > 140) {
                $(".navbar").show();
            }
            else {
                $(".navbar").hide();
            }
        });
    });


});