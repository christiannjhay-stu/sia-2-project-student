import LoginPageInput from "./LoginpageInput";
import LoginButton from "./LoginButton";

export default function (props) {
	return (
		<form className="w-full h-full">
			<img className="w-48 mx-auto mt-10" src="/assets/logo.webp" alt="React Image" />
			<p className="text-center mt-5 text-2xl">Antonio Pichon Jr. Elementary School</p>
			<div className="mx-auto w-fit my-8 text-5xl font-bold">{props.title}</div>
			<div className="flex flex-col w-full mx-auto">
				<label htmlFor="username" className="mt-5 w-11/12 mx-auto">
					<span className="block">{props.inputLabel1}</span>
					<LoginPageInput
						className="focus:outline-none focus:border-blue-700 border-theme-blue border-2 w-full h-12 pl-3 shadow-md shadow-stone-900/50"
						id="username"
						type="text"
					/>
				</label>
				<label htmlFor="password" className="mt-5 w-11/12 mx-auto">
					<span className="block">{props.inputLabel2}</span>
					<LoginPageInput
						className="focus:outline-none focus:border-blue-700 border-theme-blue border-2 w-full h-12 pl-3 shadow-md shadow-stone-900/50"
						id="password"
						type="password"
					/>
				</label>
				<LoginButton buttonLabel="Login" />
			</div>
			<div className="mx-auto w-fit mt-20 tablet:mt-60 tablet:pb-8">
				<p>
					{`${props.p1} `}
					<a href="/admission" className="text-blue-500 underline">
						{props.link1}
					</a>
				</p>
			</div>
		</form>
	);
}
