import { useState } from 'react';

import { tempMovieData } from '../../constants';

export default function ListBox() {
	const [movies, setMovies] = useState(tempMovieData);
	const [isOpen1, setIsOpen1] = useState(true);

	return (
		<div>
			<button type='button' onClick={() => setIsOpen1((prev) => !prev)}>
				{isOpen1 ? '–' : '+'}
			</button>
			{isOpen1 && (
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
			)}
		</div>
	);
}
