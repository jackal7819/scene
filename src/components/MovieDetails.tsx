interface MovieDetailsProps {
	selectedId: string;
	onCloseMovieDetails: () => void;
}

export default function MovieDetails({ selectedId, onCloseMovieDetails }: MovieDetailsProps) {
	return (
		<div>
			<button
				type='button'
				className='absolute flex items-center justify-center pt-1 text-4xl duration-500 rounded-full cursor-pointer size-14 left-10 top-10 bg-slate-800 hover:bg-slate-600'
				onClick={onCloseMovieDetails}
			>
				&larr;
			</button>
			<h2>{selectedId}</h2>
		</div>
	);
}
