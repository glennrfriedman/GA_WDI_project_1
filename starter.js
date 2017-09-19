$(function(){

	//animation fo snakeboy on first screen
	function animated() {
		$(document).ready(function() {
    	$("#snakeboy").animate({right: "+30%"}, 1000)
    								.animate({right: "+60%"}, 1000)
			});	
	}

	var animate = setInterval(animated, 1);

	var view = true;

	//allows instructions to popup when clicked
	$('.popup').click(function(){
		clearInterval(animate);
		$('#instructionsText').toggle('display');
		$('#snakeboy').css('display', 'none');
	})

	var $board = $('#container');

	var squares = []

	//set and update score 
	var score = 0; 
	document.getElementById("score").textContent = "Score: " + score;

	//set and update obstacle count
	var obstacle = 0; 
	document.getElementById("obstacles").textContent = "Obstacles: " + obstacle;

	var game = {

		stop: function(){
			game.MoveHead('stop');
		},
		//issue with head taking on direction after game resets 
		reset: function() {	
			alert('GAME OVER! YOUR SCORE WAS ' + score + '!')
			speed = 125;
			//reset score
			score = 0;
			document.getElementById("score").textContent = "Score: " + score;
			//reset obstacle
			obstacle = 0;
			document.getElementById("obstacles").textContent = "Obstacles: " + obstacle;
			//removes all food pieces
			$('.food').removeClass("food").addClass('square');
			//remove all obstacles
			$('.obstacle').removeClass("obstacle").addClass('square');
			//remove head
			$('.head').removeClass("head").addClass('square');
			//make another food
			game.makeFood();
			//add head back to board
			game.createHead();
		  this.direction = 'stop';
		
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

			this.createHead();
	//end of board function in game object
	},

		createHead: function(){

			var square1 = $('#210');

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
						else if (direction === "stop") {
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

		MoveHead: function(direction) {

				var $targetDiv = this.GetTargetDiv(direction);

				if($targetDiv === undefined){
						game.reset();
						return;
				}

				//adds class of head to the next targetDiv				
				$targetDiv.addClass("head");
				
				//removes food when head moves over it
				if($targetDiv.hasClass("food")){
					$targetDiv.removeClass("food");
					//makes another food 
					this.makeFood();
					//makes another obstacle 
					this.makeObstacle();
					//creates obstacle bonuses 
					if(obstacle <= 10){
						score+=10;
					}
					else if(obstacle > 10 && obstacle <= 20){
						score+=20;
					}
					else if(obstacle > 20 && obstacle <= 30){
						score+=30;
					}
				  else if(obstacle > 30){
						score+=50;
					}
					//update score text 
					document.getElementById("score").textContent = "Score: " + score;
				}

				//end game when obstacle is hit 
				if($targetDiv.hasClass("obstacle")){
						game.reset();
				}

				return $targetDiv;
		},

		MoveHeadConst: function(direction) {

				var self = this;
				self.direction = direction;

				//sets keydown on interval making snake move by setting direction
				$(document).keydown(function(event){
								if(event.which == 38) {
								   self.direction = 'up';
								} 
								else if(event.which == 37) {
								    self.direction = 'left';           
								} 
								else if(event.which == 39) {
								    self.direction = 'right';        
								} 
								if(event.which == 40) {
								    self.direction = 'down';    
								}
								else if(event.which == 32) {
								    self.direction = 'stop';   
								 }
							});

				// changes speed on click of speed options
				$('#fast').click(function(){
					alert("You have selected FAST speed! SLOW DOWN!")
					clearInterval(movement);
					movement = setInterval(function(){
						game.MoveHead(self.direction);		
						}, 100);
				})

				$('#regular').click(function(){
					alert("You have selected REGULAR speed! GOOD LUCK!")
					clearInterval(movement);
					movement = setInterval(function(){
						game.MoveHead(self.direction);		
						}, 175);
				})

				$('#slow').click(function(){
					alert("You have selected SLOW speed! SLOW DOWN!")
					clearInterval(movement);
					movement = setInterval(function(){
						game.MoveHead(self.direction);		
						}, 250);
				})

				var movement = setInterval(function(){

					game.MoveHead(self.direction);
						
				}, 175);
		
		},

		makeFood: function() {

			//gets random number of square
			var randomNum = Math.floor(Math.random()*squares.length);
			//if the head doesn't have the same square # as a randomNUm generated then create a new food
			if($('.head').attr('id') !== randomNum && ('.obstacle').attr('id') !== randomNum){

					var foodPos = $('#'+randomNum);
					foodPos.attr('class', 'food');

				}
			
			}, 

		//same function as make Food but also updates obstacles count and text
		makeObstacle: function() {

			var randomNum = Math.floor(Math.random()*squares.length);

			if($('.head').attr('id') !== randomNum && $('.food').attr('id') !== randomNum){

					var obstaclePos = $('#'+randomNum);
					obstaclePos.attr('class', 'obstacle');

				}

			obstacle+=1
				
			document.getElementById("obstacles").textContent = "Obstacles: " + obstacle;

		}

//end of game object
}

//initializes game
function init(){

	game.createBoard();
	game.MoveHeadConst();

//end of init
}

init();

//end of jQuery 
}); 