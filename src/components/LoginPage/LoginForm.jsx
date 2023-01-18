export default function (props) {
	return (
		<form>
			<div className="mx-auto w-fit mt-11">
				<img src="/assets/logo.jpg" alt="React Image" height="200" width="200" />
			</div>
			<div className="mx-auto w-fit mt-5">
				<p>Antonio Pichon Jr. Elementary School</p>
			</div>
			<div className="mx-auto w-fit mt-5 text-4xl font-bold">Login</div>
			<div className="flex flex-col w-fit mx-auto">
				<label for="inputUsername" className="mt-5">
					{props.inputLabel1}
				</label>
				<input
					type="text"
					id="inputUsername"
					class="outline-none bg-white border-2 border-blue-900 rounded h-12 w-96 pl-3"
				/>
				<label for="inputPassword" className="mt-5">
					{props.inputLabel2}
				</label>
				<input
					type="password"
					id="inputPassword"
					class="outline-none bg-white border-2 border-blue-900 rounded h-12 w-96 pl-3"
				/>
				<button class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 mt-5 mx-auto">
					{props.buttonLabel1}
				</button>
			</div>
			<div className="mx-auto w-fit pt-52 py-10">
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
