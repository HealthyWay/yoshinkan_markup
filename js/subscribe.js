$(document).ready(function(){

    var docHeight = $(document).height();

    $('.home').css({
        'position': 'absolute',
        'left': 0,
        'top': docHeight + 30
    });
    var contacts = $('.contactus');
    var history = $('.history');

    var bottom = $('.bottom-infobox');
    var history2 = $('.history-2');
    var history3 = $('.history-3');
    var history4 = $('.history-4');
    var historyIntro = $('.history-intro');

    contacts.css({
        'position': 'absolute',
        'left': 0,
        'top': 50
    });

    history.css({
        'position': 'absolute',
        'left': 0,
        'top': contacts.height() + contacts.offset().top + 30
    });
    historyIntro.css({
        'position': 'relative',
        'left': 0,
        'top': 0
    });

    bottom.css({
        'position': 'absolute',
        'left': 0,
        'top': history.height() + history.offset().top + 30
    });

    history2.css({
        'position': 'relative',
        'left': history.width() + 30,
        'top': - history.height()/2 - 30
    });
    history3.css({
        'position': 'relative',
        'left': history2.offset().left + history2.width() + 30,
        'top': - history.height()/2 - 30
    });
    history4.css({
        'position': 'relative',
        'left': history3.offset().left + history3.width() + 30,
        'top': - history.height()/2 - 30
    });
    /*
    history5.css({
        'position': 'relative',
        'left': history4.ofset().left + history4.width() + 30,
        'top': - history.height()/2 - 30
    });*/

    $('.menu span').each(
        function(index, el)
        {
            var target = $(this).data('page');

            $(this).click(
                function(ev)
                {
                    ev.preventDefault();
                   $.fn.scrollPath("scrollTo", target, 800, "easeInOutSine");
                }
            );
        }
    );
    $.fn.scrollPath("getPath").lineTo(0, contacts.offset().top  - 50, {name: "contactus"}).
    lineTo(0, history.offset().top - 50, {name: "history-intro"}).
    lineTo(history2.offset().left  - 50, history2.offset().top + 60, {name: "history-2"}).
    lineTo(history3.offset().left  - 50, history3.offset().top + 60, {name: "history-3"}).
    lineTo(history4.offset().left  - 50, history4.offset().top + 60, {name: "history-4"});
    //lineTo(history5.offset().left  - 50, history5.offset().top + 60, {name: "history-2"});

    var wrapper = $(".pages");
    wrapper.scrollPath({drawPath: false, wrapAround: false, scrollBar: false});

/*
    $('.subscribe').click(function(){
        if ($('.subscribe-form').is(':hidden'))
        {
            $(this).addClass('active-subscribe');
            $('.subscribe-form').show();
            $('.subscribe-form').css('display','inline-block');
            $('.subscribe-box').css('width','400px');
        }
        else
        {
            $('.subscribe-form').hide();
            $(this).removeClass('active-subscribe');
            $('.subscribe-box').attr('style','');

        }
        
    });*/
    
    
    
});