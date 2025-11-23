import { useEffect, useState } from 'react';

import type { IMovie } from '../components/Movie';

export const useLocalStorageState = (initialState: IMovie[], key: string) => {
	const [value, setValue] = useState<IMovie[]>(() => {
		const storedWatched = localStorage.getItem(key);
		return storedWatched ? JSON.parse(storedWatched) : initialState;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue] as const;
};
