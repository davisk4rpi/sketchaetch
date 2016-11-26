var h = 16;
var dim = 512 / h + "px";

$('#reset').click(function(){

});

$(document).ready(function(){
	$('.div', '.game') 

	for (var i = 0; i < h; i++){
		$('.game').append('<div class="row"></div>');
		$('.row').css("height", ""+ dim);
	};
	for (var j = 0; j < h; j++){
			$('.row').append('<div class="col blank"></div></div>');
	};
	$('div.col').mouseenter(function(){
		if ($(this).hasClass('blank')){
			var x = Math.floor(Math.random()*256);
			var y = Math.floor(Math.random()*256);
			var z = Math.floor(Math.random()*256);
			$(this).append('<div class="overlay"></div>');
			$(this).removeClass('blank');
			$(this).css("background-color", "rgb(" + x + ", " + y + ", " + z + ")");
		}
		else{
			if ($("div", this).hasClass('overlay')){
				$("div", this).removeClass('overlay');
				$("div", this).addClass('overlay1');
			}
			else if ($("div", this).hasClass('overlay1')){
				$("div", this).removeClass('overlay1');
				$("div", this).addClass('overlay2');
			}
			else if ($("div", this).hasClass('overlay2')){
				$("div", this).removeClass('overlay2');
				$("div", this).addClass('overlay3');
			}
			else if ($("div", this).hasClass('overlay3')){
				$("div", this).removeClass('overlay3');
				$("div", this).addClass('overlay4');
			}
			else if ($("div", this).hasClass('overlay4')){
				$("div", this).removeClass('overlay4');
				$("div", this).addClass('overlay5');
			}
			else if ($("div", this).hasClass('overlay5')){
				$("div", this).removeClass('overlay5');
				$("div", this).addClass('overlay6');
			}
			else if ($("div", this).hasClass('overlay6')){
				$("div", this).removeClass('overlay6');
				$("div", this).addClass('overlay7');
			}
			else if ($("div", this).hasClass('overlay7')){
				$("div", this).removeClass('overlay7');
				$("div", this).addClass('overlay8');
			}
			else if ($("div", this).hasClass('overlay8')){
				$("div", this).removeClass('overlay8');
				$("div", this).addClass('overlay9');
			}
			else if ($("div", this).hasClass('overlay9')){
				$("div", this).removeClass('overlay9');
				$("div", this).addClass('overlay10');
			}
			else{}
		}
	});

	$('div.col').mouseleave(function(){
		$(this).addClass('color');
	});


});
