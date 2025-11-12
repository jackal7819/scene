import { useState } from 'react';

export default function ListBox({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className='relative xl:w-1/2 rounded-xl bg-slate-700'>
			<button
				type='button'
				className='absolute z-10 flex items-center justify-center pt-1 text-4xl duration-500 rounded-full cursor-pointer size-14 right-10 top-10 bg-slate-800 hover:bg-slate-600'
				onClick={() => setIsOpen((isOpen) => !isOpen)}
			>
				{isOpen ? '–' : '+'}
			</button>
			{isOpen && children}
		</div>
	);
}
