$(document).ready(function(){
	for (var i = 0; i < 16; i++){
		$('.container').append('<div class="row"></div>');
	};
	for (var j = 0; j < 16; j++){
			$('.row').append('<div class="col blank"></div>');
	};
	$('div.blank').mouseenter(function(){
		var x = Math.floor(Math.random()*256);
		var y = Math.floor(Math.random()*256);
		var z = Math.floor(Math.random()*256);
		$(this).css("background-color", "rgb(" + x + ", " + y + ", " + z + ")");
		$(this).removeClass("blank");
		$(this).addClass("color");
	});

	
});
