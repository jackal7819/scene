import type { IMovie } from './Movie';

interface ResultsProps {
	movies: IMovie[];
}

export default function Results({ movies }: ResultsProps) {
	return (
		<p>
			Found <strong>{movies.length}</strong> results
		</p>
	);
}
