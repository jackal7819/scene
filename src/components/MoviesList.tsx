import { useState } from 'react';

import Movie from './Movie';
import { tempMovieData } from '../../constants';

export default function MoviesList() {
	const [movies, setMovies] = useState(tempMovieData);

	return (
		<ul className='flex flex-col'>
			{movies.map((movie) => (
				<Movie key={movie.imdbID} movie={movie} />
			))}
		</ul>
	);
}
