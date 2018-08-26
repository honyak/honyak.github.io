$(document).ready(function() {

	var rand = [];

	for (var r = 19; r < 121; r++) {
		rand.push(r);
	}

	var crystals = [];

	for (var i = 1; i < 13; i++) {

		crystals.push(i);
	}

	var randNumber; 
	var crystalNumbers = []; 

	var c1;
	var c2;
	var c3;
	var c4;

  var userScore = 0; 

	var wins = 0;
	var losses = 0;


	function randNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);

    }
    

	function randomCrystal(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(a);
		}

	}

	function crystalNumbers(arr) {
		for (i = 0; i < arr.length; i++) {

		$("#btn-" + (i+1)).attr("value", arr[i]);
		}
		i1 = arr[0];
		i2 = arr[1];
		i3 = arr[2];
		i4 = arr[3];
	}

	function gameReset(x) {

		crystalNumbers = [];

		randNumber(rand);

		randomCrystal(crystals);

		crystalValues(crystalNumbers);

		Total = 0;
		$("#Total").html(userScore);

		alert(x);
	} 


	randNumber(rand); 
	randomCrystal(crystals);
	crystalNumbers(crystalNumbers);

		$("#btn-1").on("click", function() {

			Total += c1;
			$("#Total").html(userScore);
		});

		$("#btn-2").on("click", function() {

			Total += c2;
			$("#Total").html(userScore);
		});

		$("#btn-3").on("click", function() {

			Total += c3;
			$("#Total").html(userScore);
		});

		$("#btn-4").on("click", function() {

			Total += c4;
			$("#Total").html(userScore);
		});

	$("button").on("click", function() {

		if (Total == randNumber) {

			wins++;
			$("#Total").html(userScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("You win!")}, 200);
		}

		else if (Total > randNumber){

			losses++;
			$("#Total").html(userScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("You lose!")}, 200);
		}
	});

});