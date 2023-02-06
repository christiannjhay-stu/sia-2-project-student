import HeaderStyle1 from "../Headers/HeaderStyle1";

export default function () {
	return (
		<div className="flex flex-col w-full desktop:w-4/5 h-screen desktop:h-full bg-theme-light-blue">
			<HeaderStyle1 title="ANNOUNCEMENTS" />
			<div className="grow flex justify-center items-center p-10 desktop:p-20">
				<div className="w-full h-full bg-theme-blue bg-opacity-75 rounded-lg overflow-y-auto"></div>
			</div>
		</div>
	);
}
