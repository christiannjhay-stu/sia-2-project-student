import LoginForm from "./LoginForm";
import Announcements from "./Announcements";

export default function () {
	return (
		<main className="flex flex-col-reverse tablet:flex-row h-fit">
			<div className="flex justify-center items-center tablet:bg-[url('/assets/landingpageimage.webp')] bg-center bg-cover bg-no-repeat tablet:w-3/5 desktop:w-70% h-800px tablet:h-screen">
				<Announcements />
			</div>
			<div className="flex items-center bg-white w-full tablet:w-2/5 desktop:w-30% h-800px tablet:h-screen overflow-y-auto">
				<LoginForm
					title="Student Login"
					inputLabel1="Username"
					inputLabel2="Password"
					buttonLabel1="Login"
					p1="New Student?"
					link1="Apply Here"
				/>
			</div>
		</main>
	);
}
