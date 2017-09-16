$(function(){

	var $board = $('#container');

	var squares = []

	var score = 0;

	$score = $('<div id="score">')

	$score.textContent = score;

	$score.appendTo($('#gamePage'));

	var game = {

		//render function
		createBoard: function(){
			var s = 0

			for(var r = 0; r < 20; r++){
					var $row = $('<tr>')
							.addClass('row')
							.appendTo($board);

			for(var c = 0; c < 20; c++){
				s++
					var $square = $('<td>')
							.addClass('square')
								.appendTo($row)
									.attr('data-row', [r]) 
										.attr('data-col', [c])
										 .attr('id',s)
										 	//might not need 'head' attr because class of head is getting added, same with food
											.attr('head', false)
												.attr('food', false)
													.attr('body', false)											
															squares.push($square);																									
							}
		//end of for loop to create boxes
		}
			//calling makeFood function to randomly add food class to a square
			this.makeFood();
	//end of board function in game object
	},

		createHead: function(){

			var square1 = $('#1');

			square1.attr('class', 'head');

		},

		GetTargetDiv: function(direction){
						//direction will be "up" "down" "left" "right"
						var $head = $(".head").removeClass("head").addClass("square");
						var curRow = Number($head.attr("data-row"));
						var curCol = Number($head.attr("data-col"));

						if (direction === "left"){
							curRow--;
						} else if (direction === "right") {
							curRow++;
						} else if (direction === "up") {
							curCol--;
						} else if (direction === "down") {
							curCol++;
						}
						else if (direction === "null") {
							curCol;
							curRow;
						}

						var found = squares.find(function(square){
										 					return parseInt(square.attr('data-row')) === curRow && 
										 				 					parseInt(square.attr('data-col')) === curCol;
										 				});

						//console.log("i am found " + found);
						return found;

						},

		MoveHead:  function(direction) {
				
				var $targetDiv = this.GetTargetDiv(direction);
				$targetDiv.addClass("head");
				
				//removes food class when present 
				if($targetDiv.hasClass("food")){
					$targetDiv.removeClass("food");
					score+10;
					this.makeFood();
					this.makeObsticle();
				}

				if($targetDiv.hasClass("obsticle")){
					alert('You lose!')
				}

				return $targetDiv;

		},

		MoveHeadConst: function(direction) {

			var speed = 250;

				$(document).keydown(function(event){
								if(event.which == 38) {
								   direction = 'up';
								} 
								else if(event.which == 37) {
								    direction = 'left';           
								} 
								else if(event.which == 39) {
								    direction = 'right';        
								} 
								if(event.which == 40) {
								    direction = 'down';    
								}
								else if(event.which == 32) {
								    direction = 'null';   
								 }
							});
			
			setInterval(function(){

					game.MoveHead(direction);
						
				}, speed);
		
		},

		makeFood: function() {

			var randomNum = Math.floor(Math.random()*squares.length);

			if($('.head').attr('id') !== randomNum){

					var foodPos = $('#'+randomNum);
					foodPos.attr('class', 'food');

				}
			
			}, 

		makeObsticle: function() {

			var randomNum = Math.floor(Math.random()*squares.length);

			if($('.head').attr('id') !== randomNum && $('.food').attr('id') !== randomNum){

					var obsticlePos = $('#'+randomNum);
					obsticlePos.attr('class', 'obsticle');

				}

		}

//end of game object
}

// console.log(game.squares);

function init(){

	game.createBoard();
	game.createHead();
	game.MoveHeadConst();

//end of init
}

init();

//end of jQuery 
}); 