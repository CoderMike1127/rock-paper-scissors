
/* This is the actual game of Rock Paper Scissors */
function RPS(){

	/* Starts off the game by prompting the user*/
	var userChoice = prompt("Do you choose rock, paper or scissors?");
	var computerChoice = Math.random();
	var outcome = function(result){
		document.getElementById("outcome").innerHTML += result + '<br>';
	}

	outcome("User: " + userChoice);

	/* Checks if computerChoice is less than 0.34. If it is then computerChoice will equal rock.*/
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	/* If computerChoice is not less than 0.34 then it will check to see if it is greater than or 
	equal to 0.67. If it is then computerChoice will equal paper*/
	} else if(computerChoice <= 0.67) {
		computerChoice = "paper";
	/* If computerChoice is neither less than 0.34 and greater than or equal to 0.67, then it will be equal to scissors*/
	} else {
		computerChoice = "scissors";
	}

	outcome("Computer: " + computerChoice);
	

	/* This function compares the userChoice with the computerChoice and lists out the possible outcomes of the game*/
	var compare = function(choice1, choice2) {

	    if (choice1 === choice2) {
	    	outcome("The result is a tie!")
	        return RPS();
	    }
	    else if (choice1 === "rock") {
	        if (choice2 === "scissors") {
	        	outcome("Rock wins!")
	        }
	        else {
	            outcome("Paper wins!");
	        }
	    } else if (choice1 === "paper") {
	        if (choice2 === "rock"){
	            outcome("Paper wins");
	        }
	        else {
	            outcome("scissors wins")
	        }
	    } else if (choice1 === "scissors") {
	        if (choice2 === "paper") {
	            outcome("scissors wins");
	        }
	        else {
	            outcome("rock wins");
	        }
	    }
	};

	compare(userChoice, computerChoice);
}
RPS();