# GA_WDI_project_1

## SnakeBoy: Color

### Overview (SnakeBoy, A History):

![alt text](https://media.giphy.com/media/2lbhL8dSGMh8I/giphy.gif)

SnakeBoy: Color is a JavaScript based browser game that is a variant of the original Snake game released on Nokia mobile phones.
I originally intended to create a replica of the mobile snake game using Drake's head and a phone (my not so funny
play on hot-line bling) instead of the traditional 8-bit snake head and apple. Along the path to creation I hit some 
road blocks related to project restrictions of not using HTML Canvas or creating a detection collision game. 
As a result, I ended up creating my own version of Snake, SnakeBoy: Color. In the end the restrictions ended up being a 
blessing because they allowed me to focus my efforts and play with the skills I have learned so far to create something that is 
original, interersting, and for me, down right fun to play with. 

If you're interested, see below for some visuals from "Drake: A Snake Game"....R.I.P...for now.

![alt text](https://i.imgur.com/37cTksY.png)

![alt text](https://i.imgur.com/CyJQRBE.png)

![alt text](https://i.imgur.com/W5bGD4b.png)

### Technologies:

SnakeBoy: Color was created using HTML5, CSS3, JavaScript, and the jQuery library. 

The HTML that was written for the game was very minimal. It contains the base text displayed on both the start and game
pages as well as the containers for elements that were added in the .js file through DOM maniuplation.

CSS was utilized for styling of the starter and landing pages as well as the hover animations over the click options. 

JavaScript was utilized to create the game logic, build the board that the game sits on, maniuplate CSS styling, 
and create the animation on the landing page. The entire white space on the game page is actually made up of 400 individual
squares with unique attributes. The grid is created utilizing jQuery functions and as it is generated various attributes
are added to each square which allows for the manipulation of those squares. Squares are assigned classes
of head, food, or obstacle. The head is maniuplated to move to the next position based on the data-row and data-column 
attributes also assigned to the squares. Food and obstacles are generated by assigning random square numbers with those classes. 

For more detail, please see the starter.js file in the repository. 

### Wireframes:

Nothing beats good old fashion pen on paper. These are the wireframes for the original Drake snake game, but essentially 
it is the same core concept that carried through to SnakeBoy: Color. 

![alt text](https://i.imgur.com/NLJw6xj.jpg)

### Unsolved problems:

SnakeBoy had a few unsolved problems, or maybe head scratchers is a better term for thema at this point. 

1. Setting the speed of the setInterval that controls the class of head being added to consecutive squares.

I attempted to solve the issue of being able to have the user select 3 different speed options by having a 
globally defined speed variable and have the setInterval time option be equal to that variable. Then I added
click events to the fast, regular, and slow divs that would change the speed variable. When doing this, with many 
variations (moving the $click functions globally or locally within the MoveHeadConst function, adding clearIntervals(),
set the setInterval to a variable and feeding it into the $clicks, etc.) I could not alter the speed variable succesfully.
Ultimately in order to solve this problem, I ended up clearing the interval every time within the $click and setting a new
Interval within that, is this the only way to do this? Am I missing something? 

2. Animation of SnakeBoy on the landing page. 

When the instructions are clicked on the landing page that triggers a click event that toggles the display on the <p> below 
it. I tried to use this same toggle to hide SnakeBoy on the landing page, however when loading the page it would work with 
varying results, sometimes immediately hiding the SnakeBoy div, sometimes hiding it after it animated back and forth a few times.
My ultimate goal was to hide it when the instructions show up and have it re-animate and show when the user
clicks the instructions again. Ultimately, I ended up using a .css() to force the SnakeBoy div's display to none when 
the instructions are clicked, but that didn't allow for re-animation. Would love to know how to make this happen!
