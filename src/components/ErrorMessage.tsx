interface ErrorMessageProps {
	errorMessage: string;
}

export default function ErrorMessage(errorMessage: ErrorMessageProps) {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<p className='text-red-400'>
				<span className='mr-2'>⚠️</span>
				{errorMessage.errorMessage}
			</p>
		</div>
	);
}
