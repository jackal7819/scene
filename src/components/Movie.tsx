interface MovieProps {
	movie: {
		imdbID: string;
		Poster: string;
		Title: string;
		Year: string;
	};
}

export default function Movie({ movie }: MovieProps) {
	return (
		<li key={movie.imdbID}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	);
}
