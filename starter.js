console.log('linked up');

$(function(){
	
	var snake = {

		body: [],

		score: 0,

		move: function(){

				var $drake = $('<div id="drake">');

				$drake.appendTo($('#container'));

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
					    else if(event.which == 38) {
					        dir = 'bottom';    
					    }; 
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

			var $food = $('<div class="food">');	

			$food.appendTo($('#container'));

			$food.css("top", Math.random() * window.innerHeight);
      $food.css("left", Math.random() * window.innerWidth);

			setInterval(function() {
      		$food.css("top", Math.random() * window.innerHeight);
      		$food.css("left", Math.random() * window.innerWidth);
    	}, 2000)

			return $food;

		}					

	
//end of snake
}

function init() {
	
	snake.createBoard();
	snake.move();
	snake.makeFood();

}

init();

//end of jQuery
});