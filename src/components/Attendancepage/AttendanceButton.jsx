export default function (props) {
	return (
		<button
			className={`${props.className} flex w-40 items-center justify-center rounded-lg bg-theme-blue py-1 text-xl font-bold text-white shadow-md shadow-gray-900/50 hover:bg-theme-blue-darker`}
		>
			{props.icon} {props.buttonText}
		</button>
	);
}
