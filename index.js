$(document).ready(function(){

	$("#discoverMovies").click(function(){

		$.getJSON({
			url: "https://api.themoviedb.org/3/discover/movie?api_key=466839c4d8544152a58da0ad13d38545&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
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
		showing+="<p>" + data.results[i].original_title + "</p>" ;
	}
	return showing; 
}

// 466839c4d8544152a58da0ad13d38545