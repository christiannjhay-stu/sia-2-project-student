import { BsBoxArrowRight } from "react-icons/bs";
import NavItem from "./NavItem";
import NavLogoutButton from "./NavLogoutButton";
import SchoolLogo from "../../assets/logo.webp";

export default function (props) {
	return (
		<ul className="hidden desktop:block bg-theme-blue-darker w-full h-fit desktop:h-full py-10 overflow-y-auto">
			<li className="flex flex-row justify-center items-center gap-2 w-11/12 mx-auto">
				<img className="w-28 h-28" src={SchoolLogo} />
				<div>
					<p className="text-white text-xl tablet:text-2xl font-bold break-words">
						{props.studentName}
					</p>
					<p className="text-base tablet:text-xl text-gray-500">Student</p>
				</div>
			</li>
			<li className="flex flex-row justify-center items-center gap-2 w-fit mx-auto my-5">
				<p className="font-bold text-white text-base tablet:text-xl">S.Y.</p>
				<select className="bg-white outline-none rounded-lg py-px w-40 text-center font-bold hover:cursor-pointer">
					<option value="2023-2024">2022-2023</option>
					<option value="2023-2024">2023-2024</option>
					<option value="2023-2024">2024-2025</option>
				</select>
			</li>
			<NavItem
				className="border-theme-dark-blue border-t-2 tablet:border-t-4 border-b tablet:border-b-2"
				navigate="announcements"
				bgColorNotHover="rgb(6 60 113)"
				bgColorHover="#4E7FAE"
				itemName="Announcements"
			/>
			<NavItem
				className="border-theme-dark-blue border-t tablet:border-t-2 border-b tablet:border-b-2"
				navigate="registration"
				bgColorNotHover="rgb(6 60 113)"
				bgColorHover="#4E7FAE"
				itemName="Registration"
			/>
			<NavItem
				className="border-theme-dark-blue border-t tablet:border-t-2 border-b tablet:border-b-2"
				navigate="subjects"
				bgColorNotHover="rgb(6 60 113)"
				bgColorHover="#4E7FAE"
				itemName="Subjects"
			/>
			<NavItem
				className="border-theme-dark-blue border-t tablet:border-t-2 border-b tablet:border-b-2"
				navigate="attendance"
				bgColorNotHover="rgb(6 60 113)"
				bgColorHover="#4E7FAE"
				itemName="Attendance"
			/>
			<NavItem
				className="border-theme-dark-blue border-t tablet:border-t-2 border-b-2 tablet:border-b-4"
				navigate=""
				bgColorNotHover="rgb(6 60 113)"
				bgColorHover="#4E7FAE"
				itemName="Enroll Here"
			/>
			<NavLogoutButton
				className="flex flex-row justify-center items-center text-xl text-white font-bold bg-red-600 hover:bg-red-800 w-36 py-1 rounded-lg gap-2 mx-auto mt-80"
				buttonIcon={<BsBoxArrowRight />}
				buttonLabel="Logout"
			/>
		</ul>
	);
}
