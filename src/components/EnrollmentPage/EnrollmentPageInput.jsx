export default function (props) {
	return (
		<input
			className={`rounded ${props.className}`}
			id={props.id}
			name={props.name}
			onClick={props.onClick}
			type={props.type}
			autoComplete="off"
			placeholder={props.placeholder}
			maxLength={props.maxLength}
			max={props.max}
			value={props.value}
		/>
	);
}
