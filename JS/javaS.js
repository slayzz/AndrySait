var main = function() {
	$('.dropdown-toggle').click(function() {
		$('.dropdown-menu').toggle();
	});

	$('.arrow-next').click(function() {
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();
		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();

		if (nextSlide.length === 0){
			nextSlide = $('.slide').first(); 
		}
		if (nextDot.length === 0) {
			nextDot = $('.dot').first();
		}

		currentSlide.fadeOut(700).removeClass('active-slide');
		nextSlide.fadeIn(700).addClass('active-slide');

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');

	});

	$('.arrow-prev').click(function() {
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.prev();
		var currentDot = $('.active-dot');
		var nextDot = currentDot.prev();

		if (nextSlide.length === 0){
			nextSlide = $('.slide').last(); 
		}
		if (nextDot.length === 0) {
			nextDot = $('.dot').last();
		}

		currentSlide.fadeOut(700).removeClass('active-slide');
		nextSlide.fadeIn(700).addClass('active-slide');

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	});
/*  Random Fact  */


	$('.btn').click(function() { 
		var currentFact = $('.active-fact');
		var nextFact = currentFact.next('p');

		if(nextFact.length == 0){
			nextFact = $('.fact').first();
		}

		currentFact.hide(700).removeClass('active-fact');
		nextFact.show(700).addClass('active-fact')

		console.log(currentFact);
		console.log(nextFact);
	});

	$('.img-responsive').click(function() {
		var url = $(this).attr('src');
		modalWindow(url);

	})

/*  Modal Wndow  */

	$('.img-with').click(function() {
		var url = $(this).attr('src');
		modalWindow(url);

	})

	function modalWindow(url) {
		$('#overlay').fadeIn(400,function(){ 
				$('.modal-window').css('display', 'block').animate({opacity: 1, top: '1%'}, 200); 
				$('.big-foto').removeClass('big-foto-active');
				$('.big-foto[src = "' + url +'"]').addClass('big-foto-active');
				console.log(('.big-foto[src = "' + url + '"]'));
		});
	}

	$('.modal_close').click(function() {
		$('.modal-window').animate({opacity: 0, top: '45%'}, 200, function(){
			$(this).css('display','none');
			$('#overlay').fadeOut(400);
		});
	});
	$('#overlay').click(function(){
		$('.modal-window').animate({opacity: 0, top: '45%'},200, function(){
			$(this).css('display','none');
			$('#overlay').fadeOut(400);
		});	
	});

/* Minds */


	$('.btn').click(function() {
		if ($('.btn').hasClass('disabled')) {
			return false;
		}
		if ($('.posts > li').length >= 6) {
			$('.posts > li').remove();
		} 
		var post = $('.status-box').val();
		$('<li>').text(post).prependTo('.posts').animate({opacity: "1", marginLeft: "0px"}, 1500).addClass('bg-success');
		$('.status-box').val('');
		$('.counter').text('140');
		$('.btn').addClass('disabled');
		$('<img id="photo6" src="photo/photoAndrey8.jpg" width = "40%">').appendTo('.for-random').hide().fadeIn(500).fadeOut(500);
		//clearInterval(intervalForMinds);
		//setInterval('alert("прошла секунда")', 5000);
		});

	$('.status-box').keyup(function() {
	    var postLength = $(this).val().length;
	    var charactersLeft = 140 - postLength;
	    $('.counter').text(charactersLeft);
	  
	    if(charactersLeft < 0) {
	      $('.btn').addClass('disabled'); 
	    }
	    else if(charactersLeft == 140) {
	      $('.btn').addClass('disabled');
	    }
	    else {
	      $('.btn').removeClass('disabled');
	    }
 	 });	

	$('.btn').addClass('disabled');

	var intervalForMinds = 	setInterval(function () {
			if ($('.posts > li').length >= 6) {
				$('.posts > li').remove();
			} 
			var mindsAndrey = ["Андрей, хочет ням ням!", "Андрей, хочет играться!", "Андрею бо-бо", "Андрей любит облачка", "Андрей хочет плясать"];
			var masNumb = Math.floor((Math.random() * 5));
			$('<li>').text(mindsAndrey[masNumb]).prependTo('.posts').animate({opacity: "1", marginLeft: "0px"}, 1500).addClass('bg-success');	
		}, 4000);	

	$('.status-box').keypress(function(e) {
		if (e.which == 13){
			if ($('.btn').hasClass('disabled')) {
			return false;
			}
			if ($('.posts > li').length >= 6) {
			$('.posts > li').remove();
			} 
			var post = $('.status-box').val();
			$('<li>').text(post).prependTo('.posts').animate({opacity: "1", marginLeft: "0px"}, 1500).addClass('bg-success');
			$('.status-box').val('');
			$('.counter').text('140');
			$('.btn').addClass('disabled');
			$('<img id="photo6" src="photo/photoAndrey8.jpg" width = "40%">').appendTo('.for-random').hide().fadeIn(500).fadeOut(500);
			clearInterval(intervalForMinds);
		} 
	});

};

$(document).ready(main);