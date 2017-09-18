$(function(){

	// $('.popup').click(function(){
	// 	$('#instructions').toggleClass('.hide');
	// })

	//speed automatically set at regular
	var speed = 125;

	//changes speed on click of speed options
	$('#fast').click(function(){
		speed = 90;
		alert("You have selected fast speed! SLOW DOWN!")
		console.log(speed);
	})

	$('#regular').click(function(){
		speed = 125;
		alert("You have selected regular speed! GOOD LUCK!")
		console.log(speed);
	})

	$('#slow').click(function(){
		speed = 175;
		alert("You have selected slow speed! HURRY UP!")
		console.log(speed);
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

		//issue with head taking on direction after game resets 
		reset: function() {

			score = 0;
			obstacle = 0;
			this.makeFood();
			this.createHead();

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
						else if (direction === "stop") {
							curCol;
							curRow;
						}

						//find for reset - look for if now class has a head and if that's the case then reset
						//COME BACK TO!

						//finds next square
						var found = squares.find(function(square){
										 					return parseInt(square.attr('data-row')) === curRow && 
										 				 					parseInt(square.attr('data-col')) === curCol;
										 				});

						//console.log("i am found " + found);
						return found;

						},

		// stopHead: function(direction){
		// 	this.MoveHead('null');
		// },

		MoveHead:  function(direction) {

				var $targetDiv = this.GetTargetDiv(direction);
				//adds class of head to the next targetDiv
				if($targetDiv === undefined){

					$('.food').removeClass("food").addClass('square');
				
					$('.obstacle').removeClass("obstacle").addClass('square');
					
					$('.head').removeClass("head").addClass('square');	

					setTimeout(function(){
						alert('GAME OVER! YOUR SCORE WAS ' + score + '!')
						game.reset();
					}, 1);
					
				}

				else {
					$targetDiv.addClass("head");
				}
				
				//removes food when head moves over it
				if($targetDiv.hasClass("food")){
					$targetDiv.removeClass("food");
					//makes another food 
					this.makeFood();
					//makes another obstacle 
					this.makeobstacle();
					//creates obstacle bonuses 
					if(obstacle < 10){
						score+=10;
					}
					else if(obstacle > 10 && obstacle < 20){
						score+=20;
					}
					else if(obstacle > 20 && obstacle < 30){
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
					
					$('.food').removeClass("food").addClass('square');
				
					$('.obstacle').removeClass("obstacle").addClass('square');
					
					$('.head').removeClass("head").addClass('square');	

					setTimeout(function(){
						alert('GAME OVER! YOUR SCORE WAS ' + score + '!')
						game.reset();
					}, 1);
				}

				return $targetDiv;

		},

		MoveHeadConst: function(direction) {

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
								    direction = 'stop';   
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

		//same function as make Food but also updates obstacles count and text
		makeobstacle: function() {

			var randomNum = Math.floor(Math.random()*squares.length);

			if($('.head').attr('id') !== randomNum && $('.food').attr('id') !== randomNum){

					var obstaclePos = $('#'+randomNum);
					obstaclePos.attr('class', 'obstacle');

				}

			obstacle+=1
				
			document.getElementById("obstacles").textContent = "obstacles: " + obstacle;

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