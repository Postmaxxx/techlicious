(function ($) {

	const store = {
		selected: '',
		mobileSelected: ''
	}

	$(document).ready(function(){
		$.fn.get_max_height = function() {
	        var heights = [];
	        this.each(function() {
	            $(this).css({ height: 'auto' });
	            heights.push($(this).height());
	        });

	        var maxHeight = Math.max.apply(0, heights);
	        return maxHeight;
	    }

	    $.fn.equalHeights = function(options) {

	        // This is the easiest way to have default options.
	        var heights = [];

	        this.each(function() {
	            $(this).css({ height: 'auto' });
	            heights.push($(this).height());
	        });

	        var maxHeight = Math.max.apply(0, heights);
	        this.height(maxHeight);
	    }

	    $.fn.equalHeights_inrow = function(options) {

	        // This is the easiest way to have default options.
	        var settings = $.extend({
	            // These are the defaults.
	            numItem_inrow: ""
	        }, options);

	        var tep = this.length;
	        for (var i = 0; i <= tep / settings.numItem_inrow; i++) {
	            this.slice(i * settings.numItem_inrow, i * settings.numItem_inrow + settings.numItem_inrow).equalHeights();
	        };
	    }

		if(window.innerWidth < 768) {
			$('.slider-wrap').owlCarousel({
				margin: 12,
				loop: true,
				items: 1,
				autoplay: true,
				responsive : {
				    0 : {
				        items: 1,
				    },
				    480 : {
				        items: 2,
				    },
				    580 : {
				    	items: 3,
				    }
				}
			});

			$('.other-products').owlCarousel({
				margin: 12,
				loop: true,
				items: 1,
				autoplay: true,
				responsive : {
				    0 : {
				        items: 1,
				    },
				    480 : {
				        items: 2,
				    },
				    580 : {
				    	items: 3,
				    }
				}
			});

			$('.top-section-slider').owlCarousel({
				loop: true,
				items: 1,
				autoplay: false,
			});
		}

		if(window.innerWidth>767) {
            $('.block-list .block-item .text-block h3').equalHeights();
            $('.block-list .block-item .text-block .decr-text').equalHeights();
        }










		//-------------------------------------------- NAV -------------------------------------------------------------------------------
        
		if( $('header .desktop ul li ul').length) {
        	$('header .desktop ul li ul').parents('li').addClass('hasChild');
        }

		
		$('header .desktop ul li div a').on('click', function(){

			if (store.selected !== this.innerText) {
				$('header .desktop ul li').removeClass('selected');
			}

			$(this.parentNode.parentNode).toggleClass('selected');


			store.selected = this.innerText;
			event. stopPropagation();


		});




		//-------------------------------------------- HAMBURGER NAV -------------------------------------------------------------------------------
        
		if( $('header .mobile ul li ul').length) {
        	$('header .mobile ul li ul').parents('li').addClass('hasChild');
        }


        $('header .mobile button').on('click', (function(e){
			$(this.parentNode).toggleClass('selected')
        }))


		$('header .mobile-menu ul li div').on('click', (function(e){
			console.log(this.children[0].innerText);

			if (store.mobileSelected !== this.children[0].innerText) {
				$('header .mobile-menu ul li').removeClass('selected');
			}

			$(this.parentNode).toggleClass('selected');


			store.mobileSelected = this.children[0].innerText;
			event. stopPropagation();
        }))



		













/*


        if( $('header .sub-menu').length) {
        	$('header .sub-menu').parents('li').addClass('hasChild');
        }


        if( $('header .mobile-menu .mobile-menu_linkList').length) {
        	$('header .mobile-menu .mobile-menu_linkList').parents('li').addClass('hasChild');
        }

        $(document).click(function(){
        	$('header li.hasChild').removeClass('open');
        })

        $('header li.hasChild a').on('click', function(el){
        	el.preventDefault();
			var self = $(this),
                selfParent = self.parents('li.hasChild');

                if( selfParent.hasClass('open') ) {
                	selfParent.removeClass('open');
                } else {
                	$('header li.hasChild').removeClass('open');
                	selfParent.addClass('open');
                }

                return false;
        });

		$('.hamburger-menu').on('click', function(){
			$(this).toggleClass('is-active');
			$('.mobile-menu').toggleClass('is-open');
			$('body').toggleClass('blocked');
		});

		$('header button.search-button').on('click', function(){
			$('.search-form-wrap').addClass('open');
            document.getElementById('s').focus();
		});

		$('.search-form-wrap button.close-btn').on('click', function(){
			$('.search-form-wrap').removeClass('open');
		});

		window.onresize = function(){

	        if(window.innerWidth>767) {
	            $('.block-list .block-item .text-block h3').equalHeights();
            	$('.block-list .block-item .text-block .decr-text').equalHeights();
	        }
	    } // end of onresize*/
	});
})(jQuery);
