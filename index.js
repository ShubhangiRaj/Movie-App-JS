$(document).ready(function(){


	$.getJSON({
		url: "https://api.themoviedb.org/3/discover/movie?api_key=466839c4d8544152a58da0ad13d38545&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
	}).done(function(data){

		items = [];
	    $.each( data, function(i) {
	        items.push(data);
	    });

		var info = show(data);
		$("#displayData").html(info);
	});

	$("#sortMovies").click(function(){

		$.getJSON({
			url: "https://api.themoviedb.org/3/discover/movie?api_key=466839c4d8544152a58da0ad13d38545&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1"
		}).done(function(data){
			var info = show(data);
			$("#displayData").html(info);
		})
	});

	$("#nextPage").click(function(){

		$.getJSON({
			url: "https://api.themoviedb.org/3/discover/movie?api_key=466839c4d8544152a58da0ad13d38545&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2"
		}).done(function(data){
			var info = show(data);
			$("#displayData").html(info);
		})
	});

	$("#submitMovie").click(function(){

		// store the value of the input field in a variable
		var movieSearched = $("#movie").val();

		// add validation for input field. Cannot be blank
		if(movieSearched != ""){

			// will be making an AJAX request can use also $.getJSON()
			// in this ex will be using $.ajax()
			

			$.getJSON({
				// takes in some parameters
				url: "https://api.themoviedb.org/3/search/movie?query=" + movieSearched  + "&api_key=466839c4d8544152a58da0ad13d38545&append_to_response=videos,images" ,
			}).done(function(data){
					var info = showSearchedMovie(data);
					$("#displaySearchedMovie").html(info);

					// code for clearing the input fields
					$("#movie").val("");
				})

		}else{
			$("#error").html("Cannot be empty");
		}
	})

});

function show(data){
	console.log(data);
	var results = data.results;
	var showing = "";
	for(var i = 0; i < results.length; i++){
		showing+="<div>" + data.results[i].original_title +"</div>" ;
	}
	return showing; 
}

function show(data){
	console.log(data);
	var results = data.results;
	var showing = "";
	for(var i = 0; i < results.length; i++){
		showing+="<div>" + data.results[i].original_title +"</div>" ;
	}
	return showing; 
}

function showSearchedMovie(data){
	console.log(data);
	var results = data.results;
	var showing = "";
	for(var i = 0; i < results.length; i++){
		showing+="<p>" + data.results[i].original_title +"</p>" ;
		showing+="<p>" + data.results[i].overview +"</p>" ;
	}
	return showing; 
}

// 466839c4d8544152a58da0ad13d38545

