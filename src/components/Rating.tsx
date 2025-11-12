import { useState } from 'react';

interface StarRatingProps {
	maxRating?: number;
	className?: string;
	messages?: string[];
	defaultRating?: number;
	onSetRating?: (rating: number) => void;
}

interface StarProps {
	onRate: () => void;
	full: boolean;
	onHoverIn: () => void;
	onHoverOut: () => void;
}

export default function StarRating({
	maxRating = 5,
	className = '',
	messages = [],
	defaultRating = 0,
	onSetRating = () => {},
}: StarRatingProps) {
	const [rating, setRating] = useState(defaultRating);
	const [tempRating, setTempRating] = useState(0);

	const handleRating = (ratingValue: number) => {
		setRating(ratingValue);
		onSetRating(ratingValue);
	};

	return (
		<div className={`flex items-center gap-4 ${className}`}>
			<div className='flex'>
				{Array.from({ length: maxRating }, (_, i) => (
					<Star
						key={i}
						full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
						onRate={() => handleRating(i + 1)}
						onHoverIn={() => setTempRating(i + 1)}
						onHoverOut={() => setTempRating(0)}
					/>
				))}
			</div>

			<p className='m-0 text-4xl leading-none text-amber-300'>
				{messages.length === maxRating
					? messages[tempRating ? tempRating - 1 : rating - 1]
					: tempRating || rating || ''}
			</p>
		</div>
	);
}

function Star({ onRate, full, onHoverIn, onHoverOut }: StarProps) {
	return (
		<span
			role='button'
			onClick={onRate}
			onMouseEnter={onHoverIn}
			onMouseLeave={onHoverOut}
			className='block duration-500 cursor-pointer size-12'
		>
			{full ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					className='w-full h-full scale-110 fill-amber-300'
				>
					<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 20 20'
					className='w-full h-full stroke-amber-300'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={1.5}
						d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
					/>
				</svg>
			)}
		</span>
	);
}
