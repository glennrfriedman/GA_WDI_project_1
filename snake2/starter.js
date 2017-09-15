$(function(){

	var $board = $('#board');

	var squares = []

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

										 	//might not need 'head' attr because class of head is getting added, same with food
											.attr('head', false)
												.attr('food', false)
													.attr('body', false)
														.css('top', r*50)
															.css('left', c*50);	
															squares.push($square);																									
							}
		//end of for loop to create boxes
		}

	//end of board function in game object
	},

		createHead: function(){

			var square1 = $('#1');

			square1.attr('class', 'head');

			this.moveHead();

		},

		moveHead: function() {

				//set interval so that it is constantly updating 
				// setInterval(function(){

				// iterate over squares array

				for(var i = 0; i < squares.length; i++){

					var col = squares[i].attr('data-col');

					var row = squares[i].attr('data-row');

					var head = squares[i].attr('class');

					var food = squares[i].attr('food');

					var body = squares[i].attr('body');

				}
					
					$(document).keydown(function(event){
					  
					 	if(event.which == 40) {		
					 			if(head === 'head'){
					 				remove(head);
					 			}
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

				//end of setInterval
			// }, 20)
	
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