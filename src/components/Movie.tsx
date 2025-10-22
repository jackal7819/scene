export interface IMovie {
	imdbID: string;
	Title: string;
	Year: string;
	Poster: string;
	runtime?: number;
	imdbRating?: number;
	userRating?: number;
}

interface MovieProps {
	movie: IMovie;
}

export default function Movie({ movie }: MovieProps) {
	return (
		<li
			key={movie.imdbID}
			className='flex flex-col gap-10 p-10 border-b md:h-50 border-slate-600 rounded-xl md:flex-row'
		>
			<img src={movie.Poster} alt={`${movie.Title} poster`} className='w-20' />
			<div className='flex flex-col justify-center gap-10 text-2xl'>
				<h3>{movie.Title}</h3>
				<p className='flex gap-10'>
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	);
}
