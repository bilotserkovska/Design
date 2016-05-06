$(document).ready(function(){
    $('a.scroll').click(function(){
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 1000);
        return false;
    });
    $('.burger-button').click(function(){
	    if($('.menu-bar-button').hasClass('menu-bar-active')){
	    	$('.menu-bar-button').removeClass('menu-bar-active');
	    	$('.menu-bar-button').addClass('menu-bar-hiden');
	    	$('.menu-bar-button').slideUp();
	    }else{	
	    	$('.menu-bar-button').removeClass('menu-bar-hiden');
    		$('.menu-bar-button').addClass('menu-bar-active');
	    	$('.menu-bar-button').slideDown();
	    }
    });
    $('.col, .block-dev, .trade-col').on('inview', function(event, isInView) {
        if (isInView && $(this).hasClass('col')) {
            $('.left-col').animate({
                opacity: 1
            },1000, function(){
                $('.center-col').animate({
                    opacity: 1
                },1000, function(){
                    $('.right-col').animate({
                        opacity: 1
                    }, 1000);
                });
            });
        }
        if (isInView && $(this).hasClass('block-dev')) {
            $('.block-dev-left').animate({
                opacity: 1
            },1000, function(){
                $('.block-dev-center').animate({
                    opacity: 1
                },1000, function(){
                    $('.block-dev-right').animate({
                        opacity: 1
                    },1000);
                });
            });
        }
        if (isInView && $(this).hasClass('trade-col')) {
            $('.trade-col-left').animate({
                opacity: 1
            },1000, function(){
                $('.trade-col-center').animate({
                    opacity: 1
                },1000, function(){
                    $('.trade-col-right').animate({
                        opacity: 1
                    },1000);
                });
            });
        }
    });
});
