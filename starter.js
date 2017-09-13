console.log('linked up');

$(function(){
	
	var snake = {

		score: 0,

		createBoard: function(){

				var $board = $('#board').empty(); 
				this.score = 0; 

				for(var r = 0; r < 10; r++){
					var $row = $('<div>')
							.addClass('row')
							.appendTo($board);

				for(var c = 0; c < 10; c++){
						var $gameSpace = $('<div>')
								.addClass('gameSpace')
								.appendTo($row)
								.attr('data-row', r) 
								.attr('data-col', c)
								}
							}

				var $drake = $('<div id="drake">')			

				$drake.appendTo($board);
		//end of createBoard
		},							

		move: function(){
				
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
							}, 50); 
						
						$(document).keydown(function(event){
					    if(event.which == 40) {
					        dir = 'top';
					    } else if(event.which == 39) {
					        dir = 'left';           
					    } else if(event.which == 37) {
					        dir = 'right';        
					    } else if(event.which == 38) {
					        dir = 'bottom';    
					    }; 
						//end of keydown
						});
			//end of move
			}



//end of snake
}

function init() {
	
	snake.move();
	snake.createBoard();

}

init();

//end of jQuery
});