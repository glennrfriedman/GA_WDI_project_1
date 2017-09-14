console.log('linked up');

$(function(){

	var $drake = $('<div id="drake">');

	var $food = $('<div class="food">');

	$drake.appendTo($('#container'));
	
	var snake = {

		body: [],

		score: 0,

		move: function(){

				var speed = 15;
				
				var dir = '';

				setInterval(move = function() {
    		
    		var snake = $('#drake');
    		
    		var food = $('.food');

					    if(dir == 'top') {
					        snake.css({"top": $("#drake").position().top + 5 + "px"});
					    }

					    if(dir == 'bottom') {
					        snake.css({"top": $("#drake").position().top - 5 + "px"});
					    }

					    if(dir == 'left') {
					        snake.css({"left": $("#drake").position().left + 5 + "px"});
					    }

					    if(dir == 'right') {
					        snake.css({"left": $("#drake").position().left - 5 + "px"});
					    }

					    if(dir == 'null'){
					    		snake.css({"left": $("#drake").position().left + 0 + "px"});
					    		snake.css({"top": $("#drake").position().top + 0 + "px"});
					    		console.log($drake.position());
					    		console.log($food.position());
					    }
					    //end of setInterval
							}, speed); 
						
						$(document).keydown(function(event){
					  
					 		if(event.which == 40) {
					       dir = 'top';
					    } 
					    else if(event.which == 39) {
					        dir = 'left';           
					    } 
					    else if(event.which == 37) {
					        dir = 'right';        
					    } 
					    if(event.which == 38) {
					        dir = 'bottom';    
					    }
					    else if(event.which == 32) {
					        dir = 'null';   
					     }
						//end of keydown
						});
			//end of move
			},

		createBoard: function(){

				var $board = $('#board').empty(); 

				//tried to add drake during create board - not working - drake pops up at end
				// var $drake = $('<div id="drake">');			

				this.score = 0; 

				for(var r = 0; r < 10; r++){
					var $row = $('<div>')
							.addClass('row')
							.appendTo($board);

									for(var c = 0; c < 10; c++){
											var $square = $('<div>')
													.addClass('square')
													.appendTo($row)
													.attr('data-row', r) 
													.attr('data-col', c)
													}
							}

					// $("#gamePage").add($board);
					// $board.appendTo($('#container'));
					$("#container").add($board);

		//end of createBoard
		},

		makeFood: function(){	

			$food.appendTo($('#container'));

			$food.css("top", Math.random() * window.innerHeight);
      $food.css("left", Math.random() * window.innerWidth);

			setInterval(function() {
      		$food.css("top", Math.random() * window.innerHeight);
      		$food.css("left", Math.random() * window.innerWidth);
      		//I think this interval of 5000 needs to be a function that triggers when the food is eaten
    	}, 5000)
		},

		//come back to this
		makeBody: function(){

			// setInterval(function() {

			// 		$body = $('<div id="body">');
			// 		$body.appendTo($drake);
			// 		//again think this 1000 needs to only be triggered when food is "eaten"
			// }, 1000)

		},

		eatApple: function() {

			if($drake.position() == $food.position()){
				$food.css('background', 'red');
			}
			return $food;
		} 					

//end of snake
}

function init() {
	
	snake.createBoard();
	snake.move();
	snake.makeFood();
	snake.eatApple();
	// snake.makeBody();

}

init();

//end of jQuery
});