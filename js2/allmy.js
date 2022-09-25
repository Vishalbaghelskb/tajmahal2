 

/*$(document).ready(function(){
  var width = 0;
 
 $('.cbp-filter-item').each(function() {
  width += $(this).outerWidth(true);
 });
 $('.cbp-l-filters-button').css('width', width+16+'px');

});
*/
 
 
/*
 $(window).scroll(function() {
    if ($(".navbar").offset().top > 80) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
      } 
	  else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
 
 });
 */
 
//*************
 

 
$(document).ready(function(){
	   "use strict";
       $( 'ul.nav.nav-tabs  a' ).click( function ( e ) {
        e.preventDefault();
        $( this ).tab( 'show' );
      } );

      ( function( $ ) {
          // Test for making sure event are maintained
          $( '.js-alert-test' ).click( function () {
            alert( 'Button Clicked: Event was maintained' );
          } );
          fakewaffle.responsiveTabs( [ 'xs', 'sm' ] );
      })( jQuery );
  
 
   
    $('[data-toggle="tooltip"]').tooltip();   
 

  
	$(".one_slider").owlCarousel({
		pagination : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		autoPlay : 5000,
		singleItem:true,
		navigation: true,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		],
	});
  
     $(".portfolio_slider").owlCarousel({
		 
		 pagination : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		autoPlay : 5000,
		singleItem:true,
		navigation: true,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [979,1],
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		],
		
  });
 


  $(".home_slider").owlCarousel({
	  //transitionStyle : "fade",
	  autoPlay : 5000,
      navigation : false, // Show next and prev buttons
      //slideSpeed : 300,
     // paginationSpeed : 400,
      singleItem:true,
	  
  });
 
 });
  
 
$(function() {
            
});
   
 
 function toggleChevron(e) {
	 "use strict";
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron); 



 $( '.search_toggle' ).click( function ( e ) {
        e.preventDefault();
        $( '.navbar-form .input-group' ).toggle( 'show' );
      } );
 
//***********************
$('#main-slide .item').each(function(idx) {
  $(this).attr('id', 'item-' + idx);
});



	$(document).ready(function(){
			$('.example-animation').DrSlider({
				width: undefined,
				height: undefined,
				userCSS: false,
				transitionSpeed: 1000,
				duration: 4000,
				showNavigation: false,
				classNavigation: undefined,
				navigationColor: '#9F1F22',
				navigationHoverColor: '#D52B2F',
				navigationHighlightColor: '#DFDFDF',
				navigationNumberColor: '#000000',
				positionNavigation: 'out-center-bottom',
				navigationType: 'circle',
				showControl: true,
				classButtonNext: undefined,
				classButtonPrevious: undefined,
				controlColor: '#FFFFFF',
				controlBackgroundColor: '#000000',
				positionControl: 'left-right',
				transition: 'slide-left',
				showProgress: false,
				progressColor: '#fff',
				pauseOnHover: true,
				onReady: undefined
			});
    
		});




//****************** 

(function() {
  
  $(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
    if (e.type=='show'){
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
    }
  });  

}).call(this);


//***********************
 // new WOW().init()


jQuery(document).ready(function(){ 
"use strict";	
jQuery(window).resize(function(){
	 
 		menu1Show();
	 
 	});	
 		menu1Show();
		 jQuery("#myNavbar li.dropdown").find("ul").parent().addClass("active_list").prepend("<span class='fa'> </span>");
		 jQuery("#myNavbar li.dropdown span").click(function(){
		 jQuery(this).toggleClass('current');
		 //jQuery.not(this).removeClass('current');
	    jQuery(this).siblings("ul").slideToggle();
   	   });
  });
  
  function menu1Show()
{
	"use strict";
  	if(window.innerWidth < 768){
        jQuery(".search_form").prependTo(".navbar-header");	  
	} 
 	else if(window.innerWidth > 768){
		 jQuery(".search_form").appendTo("div#myNavbar");	
		 
		 //************
		$('ul.nav li.dropdown').hover(function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
			},
			function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
			}
		);
 	}
	
}






//******************************************


(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-juicy-projects').cubeportfolio({
        filters: '#js-filters-juicy-projects',
        loadMore: '#js-loadMore-juicy-projects',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 35,
        gapVertical: 30,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 5
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'overlayBottomReveal',
        displayType: 'sequentially',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 10000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },
    });
})(jQuery, window, document);

(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-mosaic-projects').cubeportfolio({
        filters: '#js-filters-mosaic-projects1,#js-filters-mosaic-projects2',
        loadMoreAction: 'click',
        layoutMode: 'mosaic',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 35,
        gapVertical: 30,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 5
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'zoom',
        displayType: 'sequentially',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
    });
})(jQuery, window, document);




jQuery("#slideImg").rotate();