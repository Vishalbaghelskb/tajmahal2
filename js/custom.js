jQuery(document).ready(function(){
   
    /*Mobile menu */
    $('.header').after(function() {
        return $('<div id="dedicated-mobile"><a class="trigger" href="#">Navigation<span></span></a></div>');
    });
    $('.menuBox ul').clone().attr('id', 'dedicated-mobilemenu').removeAttr('class').hide().appendTo('#dedicated-mobile');
    $('#dedicated-mobile a.trigger').addClass('close');
    $('#dedicated-mobile a.trigger').click(function(e) {
        e.preventDefault();
        $this = $(this);
        if ($this.hasClass('close')) {
            $this.removeClass('close').addClass('open');
            $this.parent().find('#dedicated-mobilemenu').slideDown();
        } else {
            $this.removeClass('open').addClass('close');
            $this.parent().find('#dedicated-mobilemenu').slideUp();
        }
    }); 
	
	/**  Slider  */							
		$('.owl-carousel').owlCarousel({
		loop:true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		margin:10,
		nav:true,
		dots:true,
		smartSpeed:2000,
		autoplay:true,
		responsive:{
			0:{
				items:1,
				
			},
			600:{
				items:2,
				
			},
			1000:{
				items:3
			}
		}
		})
		
		$('.owl-carousel-hotal').owlCarousel({
		loop:true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		margin:10,
		nav:true,
		dots:true,
		smartSpeed:2000,
		autoplay:false,
		responsive:{
			0:{
				items:1,
				
			},
			600:{
				items:2,
				
			},
			700:{
				items:3,
				
			},
			1000:{
				items:3
			}
		}
		})
		
		$('.owl-banner').owlCarousel({
		loop:true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		margin:0,
		nav:true,
		dots:true,
		smartSpeed:2000,
		autoplay:true,
		responsive:{
			0:{
				items:1,
				
			},
			600:{
				items:1,
				
			},
			1000:{
				items:1
			}
		}
		})
		
		$('.owl-testimonial').owlCarousel({
		loop:true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		margin:0,
		nav:true,
		dots:true,
		smartSpeed:2000,
		autoplay:true,
		responsive:{
			0:{
				items:1,
				
			},
			600:{
				items:1,
				
			},
			1000:{
				items:1
			}
		}
		})
	
	
	 /* Header scrool*/	
	$(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.header').addClass("small"); 
        } else {
            $('.header').removeClass("small");
        }
		
		if ($(this).scrollTop() > 300) {
            $('#toplink').addClass("show");
        } else {
            $('#toplink').removeClass("show");
        }
    });
		
		var country = $('#country_detector').val();
		$('.countrydetecter input').val(country);
		
	
	    $('#toplink').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        });
	
	
}); 