import { Link } from "react-router-dom";

export default function () {
	return (
		<div className="flex flex-col justify-center items-center h-screen w-full bg-theme-light-blue">
			<h1 className="text-5xl text-center font-extrabold my-5">
				Something went wrong with your admission!
			</h1>
			<div className="flex flex-row justify-center w-full gap-10">
				<Link className="underline text-blue-900" to="/">
					Return To Login
				</Link>
				<Link className="underline text-blue-900" to="/admission">
					Try Again
				</Link>
			</div>
		</div>
	);
}
