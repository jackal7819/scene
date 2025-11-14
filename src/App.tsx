import { useEffect, useState } from 'react';

import ErrorMessage from './components/ErrorMessage';
import ListBox from './components/ListBox';
import Loader from './components/Loader';
import Logo from './components/Logo';
import Main from './components/Main';
import MovieDetails from './components/MovieDetails';
import MoviesList from './components/MoviesList';
import Navbar from './components/Navbar';
import Results from './components/Results';
import Search from './components/Search';
import WatchedMoviesList from './components/WatchedMoviesList';
import WatchedSummary from './components/WatchedSummary';
import type { IMovie } from './components/Movie';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

export default function App() {
	const [movies, setMovies] = useState<IMovie[]>([]);
	const [watched, setWatched] = useState<IMovie[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [query, setQuery] = useState('star');
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const handleSelectMovie = (id: string) => {
		setSelectedId((selectedId) => (selectedId === id ? null : id));
	};

	const handleCloseMovieDetails = () => {
		setSelectedId(null);
	};

	const handleAddWatched = (movie: IMovie) => {
		setWatched((watched) => {
			const isAlreadyWatched = watched.some((m) => m.imdbID === movie.imdbID);
			if (isAlreadyWatched) return watched;

			return [...watched, movie];
		});
	};

	const getMovies = async (query: string) => {
		try {
			setIsLoading(true);
			setError('');
			const url = `${API_BASE_URL}/?apikey=${API_KEY}&s=${query}`;
			const res = await fetch(url);
			const data = await res.json();
			if (data.Response === 'False') throw new Error(data.Error);
			setMovies(data.Search);
		} catch (error) {
			if (error instanceof Error) setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (query.length < 3) {
			setMovies([]);
			setError('');
			return;
		}
		getMovies(query);
	}, [query]);

	return (
		<div className='min-h-screen py-10 text-xl text-white bg-slate-800'>
			<Navbar>
				<Logo />
				<Search query={query} setQuery={setQuery} />
				<Results movies={movies} />
			</Navbar>
			<Main>
				<ListBox>
					{isLoading && <Loader />}
					{!isLoading && !error && (
						<MoviesList movies={movies} onSelectMovie={handleSelectMovie} />
					)}
					{error && <ErrorMessage errorMessage={error} />}
				</ListBox>
				<ListBox>
					{selectedId ? (
						<MovieDetails
							selectedId={selectedId}
							onCloseMovieDetails={handleCloseMovieDetails}
							onAddWatched={handleAddWatched}
						/>
					) : (
						<>
							<WatchedSummary watched={watched} />
							<WatchedMoviesList watched={watched} />
						</>
					)}
				</ListBox>
			</Main>
		</div>
	);
}
