export default function (props) {
	return (
		<th
			className={`${props.className} py-1 text-lg font-bold tracking-widest tablet:text-xl desktop:text-2xl`}
			colSpan={props.colSpan}
		>
			{props.title}
		</th>
	);
}
