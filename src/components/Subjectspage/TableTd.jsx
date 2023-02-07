export default function (props) {
	return (
		<td
			className={`${props.className} py-1 text-lg tablet:text-xl desktop:text-2xl `}
			colSpan={props.colSpan}
		>
			{props.title}
		</td>
	);
}
