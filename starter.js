console.log('linked up');

$(function(){
	
	var snake = {

		move: function(){

		$(document).keydown(function(key){

		switch(parseInt(key.which, 10)) {

		// animation for right key
		case 39: $("#drake").animate({left: '+=500px'}, 100);
		break;

		// animation for left key
		case 37: $("#drake").animate({right: '+=500px'}, 100);
		break;

		// animation for up key
		case 38: $("#drake").animate({bottom: '+=500px'}, 100);
		break;

		// animation for down key
		case 40: $("#drake").animate({top: '+=500px'}, 100);
		break;

					//end of parseInt
					}
		//end of keydown
		});
	//end of move
	}
//end of snake
}

snake.move();

//end of jQuery
});