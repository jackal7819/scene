import { useEffect } from 'react';

export const useKey = (key: string, action: () => void) => {
	useEffect(() => {
		const callback = (event: KeyboardEvent) => {
			if (event.key.toLowerCase() === key.toLowerCase()) action();
		};

		document.addEventListener('keydown', callback);

		return () => {
			document.removeEventListener('keydown', callback);
		};
	}, [action, key]);
};
