var moviesJSON = require('../movies.json');



//home
exports.home = function(request, response){
	var movies = moviesJSON.movies;

	response.render('home', {
		title : "Star Wars Movies",
		movies : movies

	} );
};

// movie_single
exports.movie_single = function( request, response){
	var episode_number = request.params.episode_number;

	var movies = moviesJSON.movies;

	if ( episode_number >= 1 && episode_number <= 6){

			var movie = movies[episode_number - 1];

			var title = movie.title;

			var main_characters = movie.main_characters;


			response.render('movie_single', {
				movies : movies,
				title : title,
				movie : movie,
				main_characters : main_characters

		});
	}else{
		response.render('notFound', {
			movies : movies,
			title : "This is not the page you are looking for"
		});
	}


};

//notFound
exports.notFound = function(request, response){

	var movies = moviesJSON.movies;

	response.render('notFound', {
		movies : movies,
		title : "This is not the page you are looking for"
	});
};
