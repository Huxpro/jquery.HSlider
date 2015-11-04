/* ===========================================================
 * jQuery-HSlider.js v2
 * ===========================================================
 * Copyright 2015 Hux.
 *
 * Create an photo-first, fullpage web slider
 * All animation is powered in CSS3
 * Only for modern broswer
 *
 * ========================================================== */

(function($){

	var defaults = {
		easing:"ease",
		animationTime:1300,
		pagination:true,
	};

	/*------------------------------------------------*/
	/*  Credit: Eike Send for the awesome swipe event */
	/*------------------------------------------------*/

	$.fn.swipeEvents = function() {
		return this.each(function() {

			var startX,
				startY,
				$this = $(this);

			$this.bind('touchstart', touchstart);

			function touchstart(event) {
				var touches = event.originalEvent.touches;
				if (touches && touches.length) {
					startX = touches[0].pageX;
					startY = touches[0].pageY;
					$this.bind('touchmove', touchmove);
				}
				//event.preventDefault();
			}

			function touchmove(event) {
				var touches = event.originalEvent.touches;
				if (touches && touches.length) {
					var deltaX = startX - touches[0].pageX;
					var deltaY = startY - touches[0].pageY;

					if (deltaX >= 50) {
						$this.trigger("swipeLeft");
					}
					if (deltaX <= -50) {
						$this.trigger("swipeRight");
					}
					if (deltaY >= 50) {
						$this.trigger("swipeUp");
					}
					if (deltaY <= -50) {
						$this.trigger("swipeDown");
					}
					if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) {
						$this.unbind('touchmove', touchmove);
					}
				}
				event.preventDefault();
			}

		});
	};

	/*   swipe event End  */
	/*------------------------------------------------*/

	$.fn.HSlider = function(options){
		var settings = $.extend({}, defaults, options),
			$slider = $(this),
			sections = $("section"),
			total = sections.length,
			quiet = false,
			paginationList = "";

		$.fn.transformPage = function(settings,pos){
			$(this).css({
				"-webkit-transform": "translate3d(" + pos + "%, 0 ,0)",
				"-webkit-transition": "all " + settings.animationTime + "ms " + settings.easing,
				"-moz-transform": "translate3d(" + pos + "%, 0 ,0)",
				"-moz-transition": "all " + settings.animationTime + "ms " + settings.easing,
				"-ms-transform": "translate3d(" + pos + "%, 0 ,0)",
				"-ms-transition": "all " + settings.animationTime + "ms " + settings.easing,
				"transform": "translate3d(" + pos + "%, 0 ,0)",
				"transition": "all " + settings.animationTime + "ms " + settings.easing
			});

			return $(this);
		}

		$.fn.slideLeft = function(){
			var _index = $("section.active").data("index");
			if (_index < total) location.hash = '#'+ (_index + 1);

			return $(this);
		}

		$.fn.slideRight = function(){
			var _index = $("section.active").data("index");
			if (_index <= total && _index > 1) location.hash = '#'+ (_index - 1);

			return $(this);
		}

		// seperate RENDER, support URL hash
		$.fn._render = function(){
			var _hash = Math.floor(Number(location.hash.split('#')[1]));	// get hash, do type cast
			_hash = _hash ?   _hash : 1;									// undefined, 0, NaN
			if(_hash < 1) 	  _hash = 1;									// prevent pre overflow
			if(_hash > total) _hash = total;								// prevent post overflow
			var _activeIndex = _hash;

			// reset current
			$("section.active").removeClass("active");
			$(".pagination li a" + ".active").removeClass("active");

			// activate new
			$("section[data-index=" + _activeIndex + "]").addClass("active");
			$(".pagination li a" + "[data-index=" + _activeIndex + "]").addClass("active");

			// calculate pos and transform
			var pos = ((_activeIndex - 1) * 100) * -1;
			$slider.transformPage(settings, pos);

			return $(this);
		}

		$.fn._renderPagination = function(){
			if(!settings.pagination) return;

			// Create pagination
			$("<ul class='pagination'>" + paginationList + "</ul>").prependTo("body");
			posTop = ($slider.find(".HSlider").height() / 2) * -1;
			$slider.find(".HSlider").css("margin-top", posTop);

			// bind click event
			$(".pagination li a").click(function (){
				var page_index = $(this).data("index");
				location.hash = '#' + page_index;
			});
		}

		$.fn._bindEvent = function(){
			// HashChange
			$(window).on('hashchange', $slider._render);

			//Mousewheel MouseScroll
			$(document).bind('mousewheel DOMMouseScroll', function(event) {
				event.preventDefault();
				var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
				$slider._handleMouseScroll(event, delta);
			});

			//Touch
			$slider.swipeEvents().bind("swipeLeft",function(){
				$slider.slideLeft();
			}).bind("swipeRight",function(){
				$slider.slideRight();
			});

			return $(this);
		}

		$.fn._handleMouseScroll = function(event, delta){
			if (quiet == false) {
				if (delta == 0) return; 	// early return
				if (delta < 0) {
					$slider.slideLeft()
				} else {
					$slider.slideRight()
				};
				quiet = true;
				// deal with OSX inertia scroll
				setTimeout(function(){
					quiet = false;
				}, Number(settings.animationTime) + 100);	// make sure Number
			}
		}

		$.fn._initStyle = function(){
			$slider.addClass("HSlider").css({
				"position":"relative",
				width:"100%",
				height:"100%",
			});

			$.each(sections,function(i){
				$(this).css({
					position:"absolute",
					width:"100%",
					height:"100%",
					left:i*100 +"%"
				}).addClass("section").attr("data-index", i+1);
				$(this).find("img").css({
					minWidth: "100%",
					minHeight: "100%",
					position:"absolute",
					zIndex:1
				})
				$(this).find("article").css({
					position:"absolute",
					boxSizing:"border-box",
					width:"100%",
					bottom:0,
					zIndex:4
				})
				if(settings.pagination == true) {
					paginationList += "<li><a data-index='"+(i+1)+"' href='#" + (i+1) + "'></a></li>"
				}
			});

			return $(this);
		}

		// create slider
		$slider
			._initStyle()
			._bindEvent()
			._render()
			._renderPagination()
	}

})(window.jQuery);
