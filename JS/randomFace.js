var randomFace = function() {
	var results =  0

	function inputTable(number) {
		$('[id = ' + number + ']').prepend('<img class = "image-logo-icon"src="images/logo2.png">');
	};

	setInterval(function () {
		var firstNumber = Math.floor((Math.random() * 5));
		var secondNumber = Math.floor((Math.random() * 24));
		var endNumber = (firstNumber + "" + secondNumber);
		if ($('[id = '+ endNumber +'] > img').length !== 0) {
			$('[id = '+ endNumber +'] > img').remove();
			return
		} 
		$('[id = ' + endNumber + ']').prepend('<img class = "image-logo-icon img-responsive"src="images/logo2.png">').hide().fadeIn(700);
	}, 500);
	
	$('td').on('click','img', function() {
		$('span').remove();
		results= results + 1;
		$(this).fadeOut(700).remove();	
		$('.kill-numbers > p:first').append('<span> ' + results + '</span>')
		if (results === 5) {
			$('.kill-numbers > p').after('<br /><p>Ты убил слишком много Андреев</p>');
		} else if( results === 10) {
			$('.kill-numbers > p:last').remove();
			$('.kill-numbers > p').after('<br /><p>Ты - маньяко-убийца, Андреи начали вымирать</p>');
		} else if ( results === 20) {
			$('.kill-numbers > p:last').remove();
			$('.kill-numbers > p').after('<br /><p>Ты безжалостный хейтер Андрея!</p>');
		} else if (results === 50) {
			$('.kill-numbers > p:last').remove();
			$('.kill-numbers > p').after('<br /><p>Ты псих, ты дошел даже до этого</p>');
		}
	});	

}

$(document).ready(randomFace);







/*
	$('td').click(function() {
		 $(this).prepend('<img class = "image-logo-icon"src="images/logo2.png">');
	});
*/