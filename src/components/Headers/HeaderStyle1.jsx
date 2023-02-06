export default function (props) {
	return (
		<header className="bg-theme-red text-sm tablet:text-2xl desktop:text-5xl text-white font-extrabold tracking-widest w-fit pt-3 pr-10 pb-2 pl-5 rounded-br-full">
			{props.title}
		</header>
	);
}
