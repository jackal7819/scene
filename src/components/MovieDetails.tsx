interface MovieDetailsProps {
	selectedId: string;
}

export default function MovieDetails({ selectedId }: MovieDetailsProps) {
	return (
		<div>
			<h2>{selectedId}</h2>
		</div>
	);
}
