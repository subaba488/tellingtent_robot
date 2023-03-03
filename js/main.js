$(function () {

	

	setScroll(); 

	$(window).scroll(function(){
		setScroll(); 
	})

	function setScroll(){
		var win = $(window);
		var scrollTop = win.scrollTop();
		var winHeight = win.height();

		if(scrollTop > winHeight * 0.3 ){
			$(".header").addClass("header-bg");
	        $(".header-wave").addClass("show");
			$(".scrolltop").addClass("show");
		}else{
			$(".header").removeClass("header-bg");
	        $(".header-wave").removeClass("show");
			$(".scrolltop").removeClass("show");
		}
	}
	

	var trigger = $('#hamburger'),
		isClosed = true;

	trigger.click(function () {
		burgerTime();
	});

	function burgerTime() {
		

		if (isClosed == true) {
			trigger.removeClass('is-open');
			trigger.addClass('is-closed');
			$(".header-nav-list").addClass("open");
			$(".header-nav-list").removeClass("close");
			
			isClosed = false;
		} else {
			trigger.removeClass('is-closed');
			trigger.addClass('is-open');
			$(".header-nav-list").addClass("close");
			$(".header-nav-list").removeClass("open");
			isClosed = true;
		}
	}

	//top
	$(".scrolltop").click(function() {
		$("body,html").animate({scrollTop: 0},500);
	});

})