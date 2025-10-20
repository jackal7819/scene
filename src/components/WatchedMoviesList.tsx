import WatchedMovie from './WatchedMovie';

interface WatchedMoviesListProps {
	watched: {
		imdbID: string;
		Poster: string;
		Title: string;
		imdbRating: number;
		userRating: number;
		runtime: number;
	}[];
}

export default function WatchedMoviesList({ watched }: WatchedMoviesListProps) {
	return (
		<ul>
			{watched.map((movie) => (
				<WatchedMovie key={movie.imdbID} movie={movie} />
			))}
		</ul>
	);
}
