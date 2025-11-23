import { useEffect, useState } from 'react';

import type { IMovie } from '../components/Movie';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

export const useMovies = (query: string, callback: () => void) => {
	const [movies, setMovies] = useState<IMovie[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const controller = new AbortController();

		const getMovies = async (query: string) => {
			try {
				setIsLoading(true);
				setError('');
				const url = `${API_BASE_URL}/?apikey=${API_KEY}&s=${query}`;
				const res = await fetch(url, { signal: controller.signal });
				const data = await res.json();
				if (data.Response === 'False') throw new Error(data.Error);
				setMovies(data.Search);
			} catch (error) {
				if (error instanceof Error && !controller.signal.aborted) setError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		if (query.length < 3) {
			setMovies([]);
			setError('');
			return;
		}

		callback();
		getMovies(query);

		return () => controller.abort();
	}, [query, callback]);

	return { movies, isLoading, error };
};
