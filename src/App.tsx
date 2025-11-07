import { useEffect, useState } from 'react';

import ListBox from './components/ListBox';
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

export default function App() {
	const [movies, setMovies] = useState<IMovie[]>([]);
	const [watched, setWatched] = useState<IMovie[]>([]);

	const getMovies = async (query: string) => {
		try {
			const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.Search);
			setWatched([]);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getMovies('Batman');
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
					<MoviesList movies={movies} />
				</ListBox>
				<ListBox>
					<WatchedSummary watched={watched} />
					<WatchedMoviesList watched={watched} />
				</ListBox>
			</Main>
		</div>
	);
}
