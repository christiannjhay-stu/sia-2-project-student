export default function (props) {
	return (
		<form className="w-full">
			<img className="w-48 mx-auto" src="/assets/logo.jpg" alt="React Image" />
			<p className="text-center mt-5 text-2xl">Antonio Pichon Jr. Elementary School</p>
			<div className="mx-auto w-fit my-8 text-5xl font-bold">Login</div>
			<div className="flex flex-col w-full mx-auto">
				<label for="inputUsername" className="mt-5 w-11/12 mx-auto">
					<span className="block">{props.inputLabel1}</span>
					<input
						type="text"
						id="inputUsername"
						class="focus:outline-blue-700 bg-white border-2 border-theme-blue rounded w-full h-12 pl-3"
						autoComplete="offf"
					/>
				</label>
				<label for="inputPassword" className="mt-5 w-11/12 mx-auto">
					<span className="block">{props.inputLabel2}</span>
					<input
						type="password"
						id="inputPassword"
						class="focus:outline-blue-700 bg-white border-2 border-theme-blue rounded w-full h-12 pl-3"
						autoComplete="off"
					/>
				</label>
				<button class="bg-theme-blue hover:bg-blue-700 text-white text-xl font-bold py-2 rounded-lg w-44 mt-8 mx-auto">
					{props.buttonLabel1}
				</button>
			</div>
			<div className="mx-auto w-fit mt-10 tablet:mt-60">
				<p>
					{`${props.p1} `}
					<a href="#" className="text-blue-500 underline">
						{props.link1}
					</a>
				</p>
			</div>
		</form>
	);
}
