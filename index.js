$(document).ready(function(){

	// first page displaying some set of movies and onclick display further detail of selected movie

	$.getJSON({
		url: "https://api.themoviedb.org/3/discover/movie?api_key=466839c4d8544152a58da0ad13d38545&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
	}).done(function(data){

		var info = show(data);
		$("#displayData").html(info);

		$("#detail").click(function(){
			var data = $('#detail').data('ref');
			console.log(data); 
			$("#displayData").html(data);
		});
	});


	// to go to next page

	$("#nextPage").click(function(){

		$.getJSON({
			url: "https://api.themoviedb.org/3/discover/movie?api_key=466839c4d8544152a58da0ad13d38545&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2"
		}).done(function(data){
			var info = show(data);
			$("#displayData").html(info);
		})
	});



	// to search for a movie on user input

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
					$("#displayData").html(info);

					// code for clearing the input fields
					$("#movie").val("");

					$("#movieSearchedList").click(function(){
						var data = $('#movieSearchedList').data('ref');
						console.log(data); 
						$("#displayData").html(data);
					});
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
		showing+="<div id='detail' data-ref="+ JSON.stringify(results[i].overview)+">" + results[i].original_title +"</div><hr>" ;
		// showing+="<img>" + data.results[i].images.base_url.poster_sizes[4].poster_path+"</img>" ;
	}
	return showing; 
}

function showSearchedMovie(data){
	console.log(data);
	var results = data.results;
	var showing = "";
	for(var i = 0; i < results.length; i++){
		showing+="<div id='movieSearchedList' data-ref="+ JSON.stringify(results[i].overview)+">" + data.results[i].original_title +"</div>" ;
	}
	return showing; 
}

// 466839c4d8544152a58da0ad13d38545

