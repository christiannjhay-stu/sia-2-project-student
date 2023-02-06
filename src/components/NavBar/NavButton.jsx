export default function (props) {
	return (
		<button className="text-4xl tablet:text-6xl text-white" onClick={props.onClick}>
			{props.buttonIcon}
		</button>
	);
}
