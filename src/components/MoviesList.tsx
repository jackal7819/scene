import Movie from './Movie';
import type { IMovie } from './Movie';

interface MoviesListProps {
	movies: IMovie[];
}

export default function MoviesList({ movies }: MoviesListProps) {
	return (
		<ul className='flex flex-col'>
			{movies.map((movie) => (
				<Movie key={movie.imdbID} movie={movie} />
			))}
		</ul>
	);
}
