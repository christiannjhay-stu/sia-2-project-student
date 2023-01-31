export default function (props) {
	if (!props.required) {
		return (
			<input
				className={`rounded ${props.className}`}
				id={props.id}
				name={props.name}
				onClick={props.onClick}
				onChange={props.onChange}
				type={props.type}
				autoComplete="off"
				placeholder={props.placeholder}
				maxLength={props.maxLength}
				max={props.max}
				value={props.value}
			/>
		);
	} else {
		return (
			<input
				className={`rounded ${props.className}`}
				id={props.id}
				name={props.name}
				onClick={props.onClick}
				onChange={props.onChange}
				type={props.type}
				autoComplete="off"
				placeholder={props.placeholder}
				maxLength={props.maxLength}
				max={props.max}
				value={props.value}
				required
			/>
		);
	}
}
