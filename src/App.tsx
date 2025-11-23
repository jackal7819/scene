import { useCallback, useState } from 'react';

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
import { useLocalStorageState } from './hooks/useLocalStorageState';
import { useMovies } from './hooks/useMovies';

export default function App() {
	const [query, setQuery] = useState('');
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [watched, setWatched] = useLocalStorageState([], 'watched');

	const handleSelectMovie = (id: string) => {
		setSelectedId((selectedId) => (selectedId === id ? null : id));
	};

	const handleCloseMovieDetails = useCallback(() => {
		setSelectedId(null);
	}, []);

	const handleAddWatched = (movie: IMovie) => {
		setWatched((watched) => [...watched, movie]);
	};

	const handleDeleteWatched = (id: string) => {
		setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
	};

	const { movies, isLoading, error } = useMovies(query, handleCloseMovieDetails);

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
							watched={watched}
						/>
					) : (
						<>
							<WatchedSummary watched={watched} />
							<WatchedMoviesList
								watched={watched}
								onDeleteWatched={handleDeleteWatched}
							/>
						</>
					)}
				</ListBox>
			</Main>
		</div>
	);
}
