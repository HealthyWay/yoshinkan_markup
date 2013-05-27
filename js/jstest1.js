jQuery(document).ready(function ($) {


    //initialise Stellar.js
    $(window).stellar();

    //Cache some variables
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {

        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');

        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });

    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class 
    //from navigation link slide 2 and adds it to navigation link slide 1. 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }



    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        var dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });
		

//--------------------------------------handler of scrollmouse------------------------------------------------------------------------
   /* $(window).bindWheelEvent(function(evt) {

    
        evt.cancelDefaultAction();
		
        var scroll_direction = window.event.wheelData;
		var currentScrollTop = $(window).scrollTop();		
        var slide_now = (Math.floor ((currentScrollTop+currentScrollTop*0.2)/document.body.offsetHeight)+1);
		
     
			
			if (scroll_direction < 0){		
				
				
				animate_slide(slide_now, 'down', 4);
						
				
			}
			
			else if (scroll_direction > 0 ) {
				
				animate_slide(slide_now, 'up', 4);
			
			}  	     
			            
    });*/
	
//-----------------------------end of handler of scrollmouse------------------------------------------------------------------------


function animate_slide(slide, direction, numbers_of_slide) {
	
	var slide_direction;
	var top_slide = $('.slide[data-slide="' + slide + '"]').offset().top;
	var scroll_now = $(window).scrollTop()+$(window).scrollTop()*0.2;
	
		
	if (direction == 'up') slide--; 
	else if (direction == 'down') slide++;
	
		
	
	if ((slide>0) && (slide<=numbers_of_slide)) {
	htmlbody.animate({			
					scrollTop: $('.slide[data-slide="' + slide + '"]').offset().top
					}, 2000, 'easeInOutQuint');
					
	
	}
	
}
 
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

/*---------------------------------------------------------------------------------------------------------------------
-------------------------------------------scrollmousehook-----------------------------------------------------------------*/
	
	/*$.fn.bindWheelEvent = function(callback) {

    if(!$.isFunction(callback)) { return this; }

    if(this.length == 0) { return this; }

    var jsThis = this.get(0);

    var normalizedCallback = function(e) {

        if(!e) { var e = window.event; }

        e.cancelDefaultAction = function() {
            if (this.stopPropagation) {
                this.stopPropagation();
            }
            if (this.preventDefault) {
                this.preventDefault();
            }
            this.cancelBubble = true;
            this.cancel = true;
            this.returnValue = false;
            return false;
        }        
        
        
        var wheelData = e.detail ? e.detail * -1 : e.wheelDelta / 40;       
        if (Math.abs(wheelData)>100) { wheelData=Math.round(wheelData/100); }

        e.wheelData = wheelData;

        return callback.call(jsThis, e);
    }

    if (jsThis.addEventListener) {       
        jsThis.addEventListener('DOMMouseScroll', normalizedCallback, false);        
        jsThis.addEventListener('mousewheel', normalizedCallback, false);
    }
    else if (jsThis.attachEvent) {       
        jsThis.attachEvent('onmousewheel', normalizedCallback);
    }
    return this;
};*/

/*---------------------------------------------------------------------------------------------------------------------
-------------------------------------------end_of_scrollmousehook-----------------------------------------------------------------*/
