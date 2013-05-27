jQuery(document).ready(function ($)
{

    jQuery(function($){
      $(".slider").peKenburnsSlider();
    });
    //initialise Stellar.js
    $(window).stellar();

    //Cache some variables
    var links = $('.menu span, .logo');
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

    $('.social-network.vk').click(
        function()
        {
            window.location.href  = 'http://vk.com/yoshin';
        }
    );
        
        //-------------------------initialize plugin liTextLength----------------------
        
        jQuery(function(){            
                    $('.pr').liTextLength({
                    length: 235,        //Видимое кол-во символов
                    afterLength: '...', //Текст после видимого содержания   
                    fullText:false,      //Добавить ссылку для отображения скрытого текста
                    moreText: '',  //Текст ссылки до показа скрытого содержания
                    lessText: ''   //Текст ссылки после показа скрытого содержания
                    });
        });
        
       //-------------------------end of initialize plugin liTextLength----------------------
});


