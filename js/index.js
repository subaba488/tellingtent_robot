$(function () {
    $(".intro-skip-button").click(function () {
        $("#intro").fadeOut("slow");
        openboom();
        
    });

    setTimeout(function () {
        $("#intro").fadeOut("slow");
        openboom();
    }, 16000);

    setScroll();

})


function openboom(){

    $(".top-boom").addClass('show');
    $(".top-smoke").addClass('active');
    $(".top-ano").addClass('show');
    setTimeout(function () {
        $(".top-animate").fadeOut("fast");
    }, 5000);

}

function setScroll(){
	var win = $(window);
	var hWin = win.height();
	var wWin = win.width();
	var scroll = win.scrollTop();

	var move = $(".doctor, .ano, .doctor-mobile, .ano-mobile");

	move.each(function(){
		var tCont = $(this).offset().top;

		if(scroll > tCont - hWin*0.8){
			$(this).addClass("show");
		}else {
            $(this).removeClass("show");
        }
	})
}

$(window).scroll(function(){
	setScroll(); 
})