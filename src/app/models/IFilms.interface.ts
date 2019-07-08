export interface Rating {
	source: string;
	value: string;
}

export interface IFilms {
	title: string;
	year: string;
	rated: string;
	released: string;
	runtime: string;
	genre: string;
	director: string;
	writer: string;
	actors: string;
	plot: string;
	language: string;
	country: string;
	awards: string;
	poster: string;
	ratings: Rating[];
	metascore: string;
	imdbRating: string;
	imdbVotes: string;
	imdbID: string;
	type: string;
	dVD: string;
	boxOffice: string;
	production: string;
	website: string;
	response: string;
}