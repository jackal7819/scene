import WatchedMovie from './WatchedMovie';
import type { IMovie } from './Movie';

interface WatchedMoviesListProps {
	watched: IMovie[];
	onDeleteWatched: (id: string) => void;
}

export default function WatchedMoviesList({ watched, onDeleteWatched }: WatchedMoviesListProps) {
	return (
		<ul className='flex flex-col'>
			{watched.map((movie) => (
				<WatchedMovie key={movie.imdbID} movie={movie} onDeleteWatched={onDeleteWatched} />
			))}
		</ul>
	);
}
