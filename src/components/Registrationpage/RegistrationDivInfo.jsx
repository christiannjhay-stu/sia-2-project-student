export default function (props) {
	return (
		<div className={props.className}>
			<label className="text-lg text-white tablet:text-xl desktop:text-2xl">{props.label}</label>
			<div className={props.className2}>
				<p
					className={`${props.textAlign} text-lg font-bold text-white tablet:text-xl desktop:text-2xl`}
				>
					{props.information}
				</p>
			</div>
		</div>
	);
}
