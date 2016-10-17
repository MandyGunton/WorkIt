//*********OVERALL PURPOSE OF CODE (BASIC AND EXTENDED VERSION)*******

//1 - create an exercise prototype with properties such as name,
//difficulty level, body part targeted, low impact, ok to do in public, any
//supplies required.  Add new exercise objects to the code.

//2 - Push new exercises to arrays.  For the basic app, the array will include
//exercises.  For more complex versions, arrays will be created of objects
//associated with certain properties (i.e. exercises that are low impact)

//3 - User pushes "Work It" button.  For future versions, user will select
//options (i.e. low impact, body part focus, number of exercises)

//4 - Assign random numbers to each item in the array, then sort the array by
//this random number.

//5 - Return the first 15 exercises from the re-ordered array and post these
//to the webpage.  (For later versions where user selects the number of
//exercises, use this number to determine the return amount).

//*****BASIC CODE*********

// 1 - Create an Exercise prototype and create objects based on this prototype

// 2 - Push these exercises to an array

// 3 - Assign random numbers to the array

// 4 - Reorder the array based on number

// 5 - Return the first 15 array items

// 6 - Link this with HTML button

// Basic code 1 - 3: - Create an exercise prototype, create objects, randomizer
// and push to full array

var exerciseList = [];

function Exercise (name, difficulty, lowImpact, okForGym, needEquipment) {
	this.name = name;
  this.difficulty = difficulty;
  this.lowImpact = lowImpact;
	this.okForGym = okForGym; //defined by me to be not embarrassing
	this.needEquipment = needEquipment; //
	this.equipment = [];

	this.getRandom = function() {
		return Math.random();
	}
}

Exercise.prototype.toList = function() {
	exerciseList.push(this);
}

var pushups = new Exercise("pushups", "easy", "true", "true", "false");
var mountainClimbers = new Exercise("mountain climbers", "hard", "true", "true", "false");
var burpees = new Exercise("burpees", "hard", "false", "true", "false");
var jumpingJacks = new Exercise ("jumping jacks", "easy", "false", "true", "false");
var plankJacks = new Exercise("plank jacks", "hard", "false", "true", "false");
var plankTucks = new Exercise ("plank tucks", "hard", "false", "false", "false");
var renegadeRose = new Exercise("renegade rose", "easy", "true", "true", "false");
var highKnees = new Exercise ("high knees", "easy", "false", "true", "false");
var plank = new Exercise ("plank", "hard", "true", "true", "false");
var sidePlank = new Exercise("side plank", "hard", "true", "true", "false");
var chairStepUps = new Exercise("chair step ups", "easy", "true", "false", "true");
var wallSit = new Exercise ("wall sit", "easy", "true", "false", "true");
var crunch = new Exercise("crunches", "easy", "true", "true", "false");
var squats = new Exercise("squats", "easy", "true", "true", "false");
var jumpingSquat = new Exercise("jumping squats", "hard", "false", "true", "false");
var tricepDip = new Exercise("tricep dip", "easy", "true", "false", "true");
var lunge = new Exercise("lunges", "easy", "true", "true", "false");
var jumpingLunge = new Exercise("jumping lunges", "hard", "false", "false", "false");
var tireJump = new Exercise("tire jumps", "hard", "false", "false", "false");
var tuckJump = new Exercise("tuck jumps", "hard", "false", "false", "false");
var superWoman = new Exercise("superwoman", "easy", "true", "true", "false");
var pelvicPress = new Exercise("pelvic press", "easy", "true", "false", "false");
var skaterTouches = new Exercise("skater touches", "easy", "false", "true", "false");

pushups.toList();
mountainClimbers.toList();
burpees.toList();
jumpingJacks.toList();
plankJacks.toList();
plankTucks.toList();
renegadeRose.toList();
highKnees.toList();
plank.toList();
sidePlank.toList();
chairStepUps.toList();
wallSit.toList();
crunch.toList();
squats.toList();
jumpingSquat.toList();
tricepDip.toList();
lunge.toList();
jumpingLunge.toList();
tireJump.toList();
tuckJump.toList();
superWoman.toList();
pelvicPress.toList();
skaterTouches.toList();


var listOfNames = function(theArray) {
	for (let i = 0; i < theArray.length; i++) {
		var list = list + (i+1) + ". " + theArray[i].name + "<br />";
	}
	document.write(list);
	};

// BASIC 3 and 4 - Call Math.random() for full array and reorder the array

exerciseList.sort(function(a,b) {
  return a.getRandom() - b.getRandom();
});


//BASIC 5 - Return the 1st 15 exercises from the random list

var list = "";
var listOfFifteen = function(theArray) {
	for (let i = 0; i < 15; i++) {
		list = list + (i+1) + ". " + theArray[i].name + "<br />";
	}
	document.write(list);
	};

listOfFifteen(exerciseList);


//*******END OF BASIC CODE******************************
