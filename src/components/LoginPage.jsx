export default function () {
	return (
		<main className="flex h-screen">
			<div className="bg-[url('/assets/landingpageimage.webp')] bg-center bg-cover bg-no-repeat hidden tablet:block tablet:w-3/5 desktop:w-70% h-full">
				{/**Dito niyo lagay yung announcments */}
			</div>
			<div className="bg-white w-full tablet:w-2/5 desktop:w-30%">
				{
					<form>
						<div className="ml-48 mt-11"><img src="/assets/logo.jpg" alt="React Image" height="200" width="200"/></div>
						<div className="ml-40 mt-3">Antonio Pichon Jr. Elementary School</div>
						<div className="ml-60 mt-6 text-4xl font-bold">Login</div>
						<div className="ml-24 mt-14 ">Username</div>
						<input type="text" id="default-input" class="ml-24 bg-white border-2 border-blue-900 rounded h-12 w-96 pl-3 "/>
						<div className="ml-24 mt-7">Password</div>
						<input type="text" id="default-input" class="ml-24 bg-white border-2 border-blue-900 rounded h-12 w-96 pl-3"/>
						<p></p>	
						<div className="login mt-9 ml-52">
							<button class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pl-16 pr-16">
 							 Login
							</button>
						</div>
						<div className="ml-52 mt-56"><p>New Student? <span className="underline text-blue-400 ">Enroll Here</span></p></div>		
					</form>

					
				}
			</div>
		</main>
	);
}
