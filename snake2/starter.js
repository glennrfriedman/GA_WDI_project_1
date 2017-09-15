var jq = $(function(){

	var $board = $('#board');

	var squares = []

	$.fn.GetTargetDiv = function(direction){
		//direction will be "up" "down" "left" "right"
		var $head = $(".head").removeClass("head").addClass("square");
		var curRow = Number($head.attr("data-row"));
		var curCol = Number($head.attr("data-col"));
		if (direction === "up"){
			curRow--;
		} else if (direction === "down") {
			curRow++;
		} else if (direction === "left") {
			curCol--;
		} else if (direction === "right") {
			curCol++;
		}
		var found = squares.find(function(square){
						 						return parseInt(square.attr('data-row')) === curRow && 
						 									 parseInt(square.attr('data-col')) === curCol;
						 				});
		//console.log("i am found " + found);
		return found;
	}

	$.fn.MoveHead = function(direction) {
		var $targetDiv = $.fn.GetTargetDiv(direction);
		$targetDiv.addClass("head");
		return $targetDiv;
	}

	$.fn.MoveHeadGo = function(direction) {
		setInterval(function(){
			$.fn.MoveHead(direction);
		}, 1000);
	}

	var mySnakeIntervalTimer = function(direction){

	};


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



					$(document).keydown(function(event){
					  
					  for(var i = 0; i < squares.length; i++){

					  				var currentRow = parseInt(squares[i].attr('data-row'));
						 				var nextRow = currentRow; 

						 				var currentCol = parseInt(squares[i].attr('data-col'));
						 				var nextCol = currentCol;		

					 	//down arrow
					 	if(event.which == 40) {
					 			if(squares[i].attr('class') === "head"){	 		
						 				squares[i].removeClass("head");
						 				squares[i].addClass("square");
						 				var findNextRow = squares.find(function(square){
						 						return parseInt(square.attr('data-row')) === nextRow+1 && parseInt(square.attr('data-col')) === currentCol;
						 				});

						 				findNextRow.addClass('head');
						 				
	
					 			}

					 		//end of if class = head	
					 		}
					    
					   
					  else if(event.which == 39) {
					        	
					        	if(squares[i].attr('class') === "head"){
	
						 				squares[i].removeClass("head");
						 				squares[i].addClass("square");

						 				var moveNext = squares.find(function(square){
						 						return parseInt(square.attr('data-row')) === nextRow && parseInt(square.attr('data-col')) === currentCol;
						 				});

						 				moveNext.addClass('head');    
					    		}

					    	} 

					    }
					    // else if(event.which == 37) {
					    //     dir = 'right';        
					    // } 
					    // if(event.which == 38) {
					    //     dir = 'bottom';    
					    // }
					    // else if(event.which == 32) {
					    //     dir = 'null';   
					    //  }
						//end of keydown
						});
				
				// // end of setInterval
				// }, 1)
				
		
//end of moveHead
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