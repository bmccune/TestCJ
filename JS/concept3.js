function resizeME(){
	 var viewportHeight = $(window).height()
	$('.chaseui-pagebody').css('height',viewportHeight + 'px');
}

$(function(){
	$.stellar({
		horizontalScrolling: false,
		verticalScrolling: true,
		verticalOffset: 40,
		responsive: true
	});
	resizeME();
	var scrollorama = $.scrollorama({
		blocks:'.chaseui-pagebody',
		enablePin:false
	});
   // scrollorama.animate('#form1',{ delay: 400, duration: 200, property:'opacity', end:0 }) 
	scrollorama.animate('.chaseui-inner',{ delay: 600, duration: 300, property:'opacity', start:0 }) 
	scrollorama.onBlockChange(function() {
		console.log('You just scrolled to block#'+scrollorama.blockIndex);
	});
	$('button.chaseui-button-amazon').on("click", function(event){
		event.preventDefault();
		window.open('amazon-signin.html');
		var pageheight = parseInt($('.chaseui-pagebody').css('height').replace(/[^-\d\.]/g, ''));
		$('body').scrollTo(pageheight+100, 800 );
	});
	$('button#step2').on("click", function(event){
		event.preventDefault();
		var pageheight = parseInt($('.chaseui-pagebody').css('height').replace(/[^-\d\.]/g, ''));
		pageheight = pageheight * 2;
		pageheight = pageheight + 100;
		$('body').scrollTo( pageheight, 800 );
	});
	$('button#step3').on("click", function(event){
		event.preventDefault();
		var pageheight = parseInt($('.chaseui-pagebody').css('height').replace(/[^-\d\.]/g, ''));
		pageheight = pageheight * 3;
		pageheight = pageheight + 100;
		$('body').scrollTo( pageheight, 800 );
	});
	$('button#step4').on("click", function(event){
		event.preventDefault();
		var pageheight = parseInt($('.chaseui-pagebody').css('height').replace(/[^-\d\.]/g, ''));
		pageheight = pageheight * 4;
		pageheight = pageheight + 100;
		$('body').scrollTo( pageheight, 800 );
		setTimeout(function(){
			$('.replace').text('Checking credit history');
		}, 3000);
		setTimeout(function(){
			$('.replace').text('Getting credit score');
		}, 6000);
		setTimeout(function(){
			$('.replace').text('Calculating credit limit');
		}, 9000);
		setTimeout(function(){
			pageheight = pageheight * 5;
			pageheight = pageheight + 100;
			$('body').scrollTo( pageheight, 800 );
		}, 12000);
	});
	$('button#step5').on("click", function(event){
		event.preventDefault();
	});
});
$(window).resize(function() {
	resizeME();    
});