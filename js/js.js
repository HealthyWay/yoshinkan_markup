jQuery(document).ready(function ($)
{

    jQuery(function($){
        $(".slider").peKenburnsSlider();
    });
    //initialise Stellar.js
    $(window).stellar();

    //Cache some variables
    var links = $('.menu').find('span');
    var dataslide;
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');

    //Setup waypoints plugin
    slide.waypoint(function (event, direction)
    {
        var dataslide = $(this).attr('data-slide');

        if (direction === 'down')
        {
            $('.menu [data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else
        {
            $('.menu [data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }
    });

    mywindow.scroll(function ()
    {
        if (mywindow.scrollTop() == 0)
        {
            $('.menu [data-slide="1"]').addClass('active');
            $('.menu [data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide)
    {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }

    links.click(function (e)
    {
        e.preventDefault();
        var dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e)
    {
        e.preventDefault();
        var dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
});
