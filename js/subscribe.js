$(document).ready(function(){
    
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
        
    });
    
    
    
});