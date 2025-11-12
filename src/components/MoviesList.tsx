import Movie from './Movie';
import type { IMovie } from './Movie';

interface MoviesListProps {
	movies: IMovie[];
	onSelectMovie: (id: string) => void;
}

export default function MoviesList({ movies, onSelectMovie }: MoviesListProps) {
	return (
		<ul className='flex flex-col'>
			{movies.map((movie) => (
				<Movie key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie} />
			))}
		</ul>
	);
}
