$(function() {

	$("#bar-submit").click(function(){
	
		var ageString = $("#age").val();

		var age = parseInt(ageString);

		if ( age >= 50 ) {
			$("#form").hide();
		  	$("#form2").show();
		  	$("#answer").text("Second Level");
		  	$("#club-img").attr("src", "images/door.jpg");
		  	

		} else {
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
			$("#answer").text("Third Level");
			$("#club-img").attr("src", "images/hallway.jpg").css("width", "265px");		

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
			$("#final-answer").text("You're in, Homie");
			$("#club-img").attr("src", "https://media.giphy.com/media/3o7WTIrnaKus0mVHUI/giphy.gif").css("width", "700px");
			$("h1").hide();
			$("#answer").hide();
			$("#final-answer").show();

		} else {
			$("#club-img").attr("src", "https://media.giphy.com/media/12MgUpnxEq3ypy/giphy.gif").css("width", "700px");
			$("form4").hide();
			$("h1").hide();
			$("#answer").text("You're Dead")
			$("#text-button").hide();
			$("#tobe").hide();
			$("#form5").show();
		} 

		


		
	}); //this is the end of text


}); // this is the end of the first function