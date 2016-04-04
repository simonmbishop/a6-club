$(function() {
  //All JS goes within these brackets

	$("#bar-submit").click(function(){
		
		//select the box with id of age
		//get the avlue from that box
		var ageString = $("#age").val();

		//convert string to number
		var age = parseInt(ageString);

		//check if age is greater than 21
		if ( age >= 50 ) {
			//if age is greater than 50, say yes
			// $("#answer").text("You're in!");
			// $("#club-img").attr("src", "https://media.giphy.com/media/zyxiqEQb6wTSg/giphy.gif");
			$("#form").hide();
		  	$("#form2").show();
		  	$("#answer").text("Next Level");
		  	$("#club-img").attr("images/doorway.jpg");
		  	

		} else {
			//if age is less than 21, self-destruct
			$("#answer").text("Nope");
			$("#club-img").attr("src", "https://media.giphy.com/media/pyYi8wDVykenm/giphy.gif"); 
		}

	});

	$("#album-button").click(function(){
		
		var albumString = $("#album").val();
		
		var album = parseInt(albumString); 
		
		if ( album >= 5 ) {
			$("#form2").hide();
			$("#form3").show();
			$("#answer").text("Next Level");
			$("#club-img").attr("src", "images/hallway.jpg").css("width", "350px");		

		} else {
			$("#answer").text("Nope");
			$("#club-img").attr("src", "https://media.giphy.com/media/pyYi8wDVykenm/giphy.gif"); 
			
			
		}

	}); // this the end of albums

	$("#drinks-button").click(function(){

		var drinksString = $("#drinks").val();

		var drinks = parseInt(drinksString);

		if ( drinks >= 20 ) {
			$("#form3").hide();
			$("#form4").show();
			$("#answer").text("Final Level");
			$("#club-img").attr("src", "images/inside-club.jpg");

		} else {
			$("#answer").text("Get Out");
			$("#club-img").attr("src", "https://media.giphy.com/media/WTlH9XMLIAD4I/giphy.gif");
		}
	}); //this is the end of drinks

	$("#text-button").click(function(){

		var tobeString = $("#tobe").val();

		if ( tobeString === "to be" ) {
			$("#form4").hide();
			$("#answer").text("You're in Homie");
			$("#club-img").attr("src", "https://media.giphy.com/media/3o7WTIrnaKus0mVHUI/giphy.gif");
			$("h1").hide();

		} else {
			$("#club-img").attr("src", "https://media.giphy.com/media/12MgUpnxEq3ypy/giphy.gif");
			$("form4").hide();
			$("h1").hide();
			$("#answer").text("Boom Boom")
			$("#text-button").hide();
			$("#tobe").hide();
			
		} 

		


		
	}); //this is the end of text


}); // this is the end of the first function