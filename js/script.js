$(window).resize(function(event){
	mainblock();
});

function mainblock() {
	var h=$(window).outerHeight();
	$('.mainblock').css({
		height: h
	});
}
mainblock();

$('.filter__item').click(function(event) {
		var i=$(this).data('filter');
	if (i==1) {
		$('.portfolio__column').show();
	} else {
		$('.portfolio__column').hide();
		$('.portfolio__column.f_'+i).show();
	}
	$('.filter__item').removeClass('active');
	$(this).addClass('active');
});

$(window).scroll(function(event) {
		var s=$(this).scrollTop()/2;
	$('.mainblock__image').css('transform','translate3d(0, '+s+'px, 0)');
});

const imgBox = document.getElementsByClassName('fullImgBox'),
	fullImg = document.getElementsByClassName('fullImg'),
	x = document.getElementsByClassName('cross'),
	images = document.getElementsByClassName('item'),
	body = document.getElementsByTagName('body');

const openImg = () => {
	for(image of images){
		image.onclick = function(){
			imgBox[0].style.display = "flex";
			fullImg[0].src = this.src;
		}
	}
}
openImg();

x[0].onclick = function(){
	imgBox[0].style.display = "none";
}
