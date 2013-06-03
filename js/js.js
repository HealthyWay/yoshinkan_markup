jQuery(document).ready(function ($)
{
    //initialise Stellar.js
    $(document).stellar({horizontalOffset: 50});

    //Cache some variables
    var links = $('.menu-item');

    function goToByScroll(dataslide)
    {
        var a = $('#slide' + dataslide);
        $('body').animate({ scrollTop: a.offset().top}, 1000);
    }
    links.click(
        function()
        {
            var id = $(this).data('slide');
            goToByScroll(id);
        }
    );

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


