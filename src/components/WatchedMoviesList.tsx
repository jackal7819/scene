import WatchedMovie from './WatchedMovie';
import type { IMovie } from './Movie';

interface WatchedMoviesListProps {
	watched: IMovie[];
}

export default function WatchedMoviesList({ watched }: WatchedMoviesListProps) {
	return (
		<ul className='flex flex-col'>
			{watched.map((movie) => (
				<WatchedMovie key={movie.imdbID} movie={movie} />
			))}
		</ul>
	);
}
