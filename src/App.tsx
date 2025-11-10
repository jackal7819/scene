import { useEffect, useState } from 'react';

import ErrorMessage from './components/ErrorMessage';
import ListBox from './components/ListBox';
import Loader from './components/Loader';
import Logo from './components/Logo';
import Main from './components/Main';
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

	const getMovies = async (query: string) => {
		try {
			setIsLoading(true);
			const url = `${API_BASE_URL}/?apikey=${API_KEY}&s=${query}`;
			const res = await fetch(url);
			const data = await res.json();
			if (data.Response === 'False') throw new Error(data.Error);
			setMovies(data.Search);
			setWatched([]);
		} catch (error) {
			if (error instanceof Error) setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getMovies('batman');
	}, []);

	return (
		<div className='min-h-screen py-10 text-xl text-white bg-slate-800'>
			<Navbar>
				<Logo />
				<Search />
				<Results movies={movies} />
			</Navbar>
			<Main>
				<ListBox>
					{isLoading && <Loader />}
					{!isLoading && !error && <MoviesList movies={movies} />}
					{error && <ErrorMessage errorMessage={error} />}
				</ListBox>
				<ListBox>
					<WatchedSummary watched={watched} />
					<WatchedMoviesList watched={watched} />
				</ListBox>
			</Main>
		</div>
	);
}
