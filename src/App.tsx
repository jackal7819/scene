import { useState } from 'react';

import ListBox from './components/ListBox';
import Logo from './components/Logo';
import Main from './components/Main';
import MoviesList from './components/MoviesList';
import Navbar from './components/Navbar';
import Results from './components/Results';
import Search from './components/Search';
import WatchedMoviesList from './components/WatchedMoviesList'
import WatchedSummary from './components/WatchedSummary'
import type { IMovie } from './components/Movie';
import { tempMovieData, tempWatchedData } from '../constants';

export default function App() {
	const [movies, setMovies] = useState<IMovie[]>(tempMovieData);
	const [watched, setWatched] = useState(tempWatchedData);

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
