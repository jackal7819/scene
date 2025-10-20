import { useState } from 'react';

import { tempMovieData } from '../../constants';

export default function MoviesList() {
	const [movies, setMovies] = useState(tempMovieData);

	return (
		<ul>
			{movies.map((movie) => (
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
			))}
		</ul>
	);
}
