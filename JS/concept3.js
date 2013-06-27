var isVoiceOpen,
	animationDone,
	$mobileVoiceText,
	$mobileVoice,
	$mobileVoiceHelpMessage,
	SLIDE_SPEED = 100,
	pageheight;
function resizeME(){
	 var viewportHeight = $(window).height()
	$('.chaseui-pagebody').css('height',viewportHeight + 'px');
}
function showVoiceBox() {
	console.log("show");
}
 
function slideUp() {
	$mobileVoiceText.show();
}
 
function slideDown() {
 
}
function prefill() {
	document.getElementById("first_name").value = "Pat";
	document.getElementById("middle_name").value = "E"; 
	document.getElementById("last_name").value = "Bell";
	document.getElementById("address1").value = "321 N 50th St";
	document.getElementById("city").value = "Seattle";
	document.getElementById("state_list").value = "WA";
	document.getElementById("zip").value = "98103";
}
function getHashValue(key) {
		var hash = location.hash.match(new RegExp(key+'=([^&]*)'));
	    return hash ? hash[1] : 1;
}
function scrollToNextBlock($current) {
	
}
function scrollEffects() {

	var scrollorama = $.scrollorama({
		blocks:'.chaseui-pagebody',
		enablePin:false
	});
	// scrollorama.animate('#form1',{ delay: 400, duration: 200, property:'opacity', end:0 }) 
	scrollorama.animate('.chaseui-inner',{ delay: 600, duration: 300, property:'opacity', start:0 });
	// scrollorama.animate('#voice2', { delay: 600, duration: 300, property:'opacity', start:0})
	// scrollorama.animate('#voice3', { delay: 600, duration: 300, property:'opacity', start:0})
	// scrollorama.animate('#voice4', { delay: 600, duration: 300, property:'opacity', start:0})
	scrollorama.onBlockChange(function() {
	  console.log('You just scrolled to block#'+scrollorama.blockIndex);
	});
};
$(function(){
      $.stellar({
	   horizontalScrolling: false,
	   verticalScrolling: true,
        responsive: true
   });
    $('#section2').stellar();
    isVoiceOpen = false;
	animationDone = false;
	$mobileVoice = $(".mobilevoice"),
	$mobileVoiceText = $mobileVoice.find(".text"),
	$mobileVoiceHelpMessage = $mobileVoice.find(".chat div"),
	$form2 = $("#form2"),
	$form3 = $("#form3"),
	$form4 = $("#form4"),
	resizeME();   
	
	scrollEffects();
	// usage
    var hash = getHashValue('step');
	if(hash === '1'){
        
    }else if(hash === '2'){
        $('.chaseui-pagebody.step1').hide();
    }else if(hash === '3'){
        $('.chaseui-pagebody.step1').hide();
        $('.chaseui-pagebody.step2').hide();
        $('.chaseui-pagebody.voice').hide();
    }
	$('button.chaseui-button-amazon').on("click", function(event){
        var pageheight = parseInt($('.chaseui-pagebody').css('height').replace(/[^-\d\.]/g, ''));
		event.preventDefault();
		window.open('amazon-signin.html');
		prefill();
		$('body').scrollTo(pageheight, 800 );
	});
    $('button#step1, button.chaseui-button-chase, button.chaseui-button-google').on("click", function(event){
        var pageheight = parseInt($('.chaseui-pagebody').css('height').replace(/[^-\d\.]/g, ''));
		event.preventDefault();
		$('body').scrollTo(pageheight, 800 );
	});
	$('button#step4').on("click", function(event){
        var pageheight = parseInt($('.chaseui-pagebody').css('height').replace(/[^-\d\.]/g, ''));

		event.preventDefault();
		pageheight = pageheight * 2;
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
			pageheight = pageheight * 3;
			$('body').scrollTo( pageheight, 800 );
		}, 12000);
	});
	$('button#step5').on("click", function(event){
		event.preventDefault();
	});
    $(".mobilevoice").on("click", ".chat", function() {		
		if(!isVoiceOpen && !animationDone) {
			animationDone = true;
			$mobileVoiceText.show("fast");
			$mobileVoiceHelpMessage.html("Call Us");
			$(".slidebox").animate({height: "100px"}, SLIDE_SPEED, function() {				
				isVoiceOpen = !isVoiceOpen;
			});
		}		
	}).on("click", ".text", function() {
		animationDone = false;
		$mobileVoiceHelpMessage.html("We're here to help");
		$mobileVoiceText.hide("fast");
		isVoiceOpen && ($(".slidebox").animate({height: "0px"}, SLIDE_SPEED));
		isVoiceOpen = !isVoiceOpen;
	});
    
    
});



    
$(window).resize(function() {
	resizeME();    
});