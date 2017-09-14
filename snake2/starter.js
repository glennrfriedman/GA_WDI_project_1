$(function(){

	var $board = $('#board');

	var game = {

		// "squares": [],

		//render function
		createBoard: function(){
			let s = 0

			for(var r = 0; r < 10; r++){
					var $row = $('<div>')
							.addClass('row')
							.appendTo($board);

			for(var c = 0; c < 10; c++){
				s++
					var $square = $('<div>')
							.addClass('square')
								.appendTo($row)
									.attr('data-row', [r]) 
										.attr('data-col', [c])
										 .attr('id',s)
											.attr('head', false)
												.attr('food', false)
													.attr('body', false)
														.css('top', r*50)
															.css('left', c*50);
															// this.squares.push($square)
							}
		//end of for loop to create boxes
		}
	//end of board function in game object
	},

		createHead: function(){

			var $head = $('<div id="head">');

			let test = document.getElementById('1')
			console.log(test)
			
			 $head.appendTo(test);

			this.moveHead();

		},

		moveHead: function() {

				var $sqPosition = $('#head').parent();

				var rowNum = parseInt($sqPosition.attr('data-row')); 

				console.log(rowNum);
				
				$(document).keydown(function(event){
					  	
					 		if(event.which == 40) {			
					 			rowNum++;
					 			$('.square').attr('data-row', rowNum);
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
		}

//end of game object
}

// console.log(game.squares);

function init(){

	game.createBoard();
	game.createHead();
//end of init
}

init();

//end of jQuery 
}); 