$(function(){

	var $board = $('#container');

	var squares = []

	var score = 0; 

	document.getElementById("score").textContent = "Score: " + score;

	var obsticle = 0; 

	document.getElementById("obsticles").textContent = "Obsticles: " + obsticle;

	var game = {

		reset: function() {

			score = 0;
			obsticle = 0; 
			squares.remove();
			init();

		// 	for(var i = 0; i < squares.length; i++){
		// 		if(squares[i].hasClass('obsticle' || squares[i].hasClass('food')) || squares[i].hasClass('head')){
		// 			squares[i].removeClass('obsticle')
		// 			squares[i].removeClass('food');
		// 			squares[i].removeClass('head');
		// 			squares[i].addClass('square');
		// 		}

		// 	this.createHead();

		// }

		},

		//render function
		createBoard: function(){
			//var that assigns # to each square
			var s = 0

			//creates rows for grid 
			for(var r = 0; r < 20; r++){
					var $row = $('<tr>')
							.addClass('row')
							.appendTo($board);

			//creates columns for grid, assigns classes and attributes, 
			for(var c = 0; c < 20; c++){
				s++
					var $square = $('<td>')
							.addClass('square')
								.appendTo($row)
									.attr('data-row', [r]) 
										.attr('data-col', [c])
										 .attr('id',s)										 
										 	//might not need 'head' attr because class of head is getting added, same with food
											// .attr('head', false)
											// 	.attr('food', false)
											// 		.attr('body', false)											
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
						//var that removes the head from each square
						var $head = $(".head").removeClass("head").addClass("square");
						//gets current row and column
						var curRow = Number($head.attr("data-row"));
						var curCol = Number($head.attr("data-col"));

						//creates movement of head and pause on spacebar
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

						//finds next square
						var found = squares.find(function(square){
										 					return parseInt(square.attr('data-row')) === curRow && 
										 				 					parseInt(square.attr('data-col')) === curCol;
										 				});

						//console.log("i am found " + found);
						return found;

						},

		stopHead: function(){

				var $targetDiv = this.GetTargetDiv(direction);

				$targetDiv = 'null';

		},

		MoveHead:  function(direction) {
				//target div directoin
				var $targetDiv = this.GetTargetDiv(direction);
				//adds class of head to the next targetDiv
				$targetDiv.addClass("head");
				
				//removes food when head moves over it
				if($targetDiv.hasClass("food")){
					$targetDiv.removeClass("food");
					//makes another food 
					this.makeFood();
					//makes another obsticle 
					this.makeObsticle();
					//creates obsticle bonuses 
					if(obsticle < 10){
						score+=10;
					}
					else if(obsticle > 10 && obsticle < 20){
						score+=20;
					}
					else if(obsticle > 20 && obsticle < 30){
						score+=30;
					}
				  else if(obsticle > 30){
						score+=50;
					}
					//update score text 
					document.getElementById("score").textContent = "Score: " + score;
				}

				//end game when obsticle is hit 
				if($targetDiv.hasClass("obsticle")){
					this.stopHead();
					setTimeout(function(){
						alert('GAME OVER! YOUR SCORE WAS ' + score + '!')
					}, 500);
				}

				//WORK ON END GAME WHEN WALL IS HIT 
				// else if($targetDiv.hasClass()) {
				// 	setTimeout(function(){
				// 		alert('GAME OVER! YOUR SCORE WAS ' + score  + '!')
				// 	}, 1);
				// 	this.reset();
	
				// }

				return $targetDiv;

		},

		MoveHeadConst: function(direction) {

			//FAST
			var speed = 125;

			//SLOW
			// var speed = 150;

			//MEDIUM
			// var speed = 125;

				//sets keydown on interval making snake move by setting direction
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

			//gets random number of square
			var randomNum = Math.floor(Math.random()*squares.length);
			//if the head doesn't have the same square # as a randomNUm generated then create a new food
			if($('.head').attr('id') !== randomNum){

					var foodPos = $('#'+randomNum);
					foodPos.attr('class', 'food');

				}
			
			}, 

		//same function as make Food but also updates obsticles count and text
		makeObsticle: function() {

			var randomNum = Math.floor(Math.random()*squares.length);

			if($('.head').attr('id') !== randomNum && $('.food').attr('id') !== randomNum){

					var obsticlePos = $('#'+randomNum);
					obsticlePos.attr('class', 'obsticle');

				}

			obsticle+=1
				
			document.getElementById("obsticles").textContent = "Obsticles: " + obsticle;

		}

//end of game object
}

// console.log(game.squares);

//initializes game
function init(){

	game.createBoard();
	game.createHead();
	game.MoveHeadConst();

//end of init
}

init();

//end of jQuery 
}); 