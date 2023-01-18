import LoginForm from "./LoginForm";

export default function () {
	return (
		<main className="flex h-screen">
			<div className="bg-[url('/assets/landingpageimage.webp')] bg-center bg-cover bg-no-repeat hidden tablet:block tablet:w-3/5 desktop:w-70% h-full">
				{/**Dito niyo lagay yung announcments */}
			</div>
			<div className="bg-white w-full tablet:w-2/5 desktop:w-30%">
				<LoginForm
					inputLabel1="Username"
					inputLabel2="Password"
					buttonLabel1="Login"
					p1="New Student?"
					link1="Enroll Here"
				/>
			</div>
		</main>
	);
}
