console.log('linked up');

$(function(){

	var $drake = $('<div id="drake">');

	// need to come back to these objects - they have key, value but not sure how those should interact
	var head = {
		x: 0,
		y: 0, 
	}

	var tail = {
		x: 0, 
		y: 0, 
	}

	var $food = $('<div class="food">');

	$drake.appendTo($('#container'));
	
	var game = {

		body: [],

		score: 0,

		move: function(){

				var speed = 25;
				
				var dir = '';

				setInterval(move = function() {
    		
    		var snake = $('#drake');

    		//snake start in middle of the page
    		snake.css('margin', '0 auto');
    		snake.css('bottom', '-50px');
    		
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

				this.makeFood();

				this.eatFood();

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
													.css('top', r*50)
													.css('left', c*50);
													}
							}

					// $("#gamePage").add($board);
					// $board.appendTo($('#container'));
					$("#container").add($board);					

		//end of createBoard
		},

		makeFood: function(){	

			$food.css("top", Math.floor(Math.random() * window.innerHeight));
      $food.css("left", Math.floor(Math.random() * window.innerWidth));

      $food.appendTo($('#container'));

      //SHOULDN'T NEED THIS ANYMORE BECAUSE ONLY INVOKING WHEN FOOD EATEN AND BOARD MADE
			// setInterval(function() {
   //    		$food.css("top", Math.random() * window.innerHeight);
   //    		$food.css("left", Math.random() * window.innerWidth);
   //    		//I think this interval of 5000 needs to be a function that triggers when the food is eaten
   //  	}, 10000)

		},

		//come back to this
		makeBody: function(){

			// setInterval(function() {

			// 		$body = $('<div id="body">');
			// 		$body.appendTo($drake);
			// 		//again think this 1000 needs to only be triggered when food is "eaten"
			// }, 1000)

		//end of makeBody	
		},

		eatFood: function() {
			
			var foodPosL = $food.css('left');
			var foodPosU = $food.css('top');

			var headPosL = $drake.css('left');
			var headPosU = $drake.css('top');

			if(headPosL === foodPosL || headPosU === foodPosU){
				$food.remove();
				this.makeFood();
		 	}

			return $food;
		
		//end of eatFood
		} 					

//end of snake
}

function init() {
	
	game.createBoard();
	game.move();
	game.eatFood();

	// snake.makeBody();

}

init();

//end of jQuery
});