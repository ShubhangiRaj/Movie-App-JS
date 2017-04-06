$(document).ready(function(){


	$.getJSON({
		url: "https://api.themoviedb.org/3/discover/movie?api_key=466839c4d8544152a58da0ad13d38545&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
	}).done(function(data){
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

	$("genresMovies").click(function(){
		$.getJSON({
			url: "https://api.themoviedb.org/3/genre/movie/list?api_key=466839c4d8544152a58da0ad13d38545&language=en-US"
		}).done(function(data){
			var info = showGenres(data);
			$("#displayGenres").html(info);
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
});

function show(data){
	console.log(data);
	var results = data.results;
	var showing = "";
	for(var i = 0; i < results.length; i++){
		showing+="<p>" + data.results[i].original_title +"</p>" ;
	}
	return showing; 
}

function showGenres(data){
	console.log(data);
	var results = data.genres;
	var showing = "";
	for(var i = 0; i < genres.length; i++){
		showing+="<p>" + data.genres[i].name +"</p>" ;
	}
	return showing; 
}

// 466839c4d8544152a58da0ad13d38545

