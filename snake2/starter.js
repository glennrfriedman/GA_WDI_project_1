$(function(){

	var $board = $('#board');

	var game = {

		board: function(){

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
		//end of board
		}
	//end of board function in game object
	}

//end of game object
}

function init(){

	game.board();
//end of init
}

init();

//end of jQuery 
}); 