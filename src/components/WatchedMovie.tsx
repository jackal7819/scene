interface WatchedMovieProps {
	movie: {
		imdbID: string;
		Poster: string;
		Title: string;
		imdbRating: number;
		userRating: number;
		runtime: number;
	};
}

export default function WatchedMovie({ movie }: WatchedMovieProps) {
	return (
		<li key={movie.imdbID}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>⭐️</span>
					<span>{movie.imdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{movie.userRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{movie.runtime} min</span>
				</p>
			</div>
		</li>
	);
}
