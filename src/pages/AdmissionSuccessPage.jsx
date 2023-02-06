import { Link } from "react-router-dom";

export default function () {
	return (
		<div className="flex flex-col justify-center items-center h-screen w-full bg-theme-light-blue">
			<h1 className="text-5xl text-center font-extrabold">Your admission has been processed!</h1>
			<p className="text-2xl text-center font-bold mb-5">
				Please wait for a call/message for futher instructions.
			</p>
			<Link className="underline text-blue-900" to="/">
				Return To Login
			</Link>
		</div>
	);
}
