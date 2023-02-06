import { motion } from "framer-motion";
import { BsBoxArrowRight } from "react-icons/bs";
import NavItem from "./NavItem";
import NavLogoutButton from "./NavLogoutButton";

export default function (props) {
	return (
		<motion.ul
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="bg-theme-blue w-full h-fit desktop:h-full py-5"
		>
			<li className="flex flex-col justify-center items-center w-fit mx-auto">
				<p className="text-white text-2xl font-bold break-words">{props.studentName}</p>
				<p className="text-xl text-gray-500">Student</p>
			</li>
			<li className="flex flex-row justify-center items-center gap-2 w-fit mx-auto my-5">
				<p className="font-bold text-white text-xl">S.Y.</p>
				<select className="bg-white outline-none rounded-lg py-px w-32 tablet:w-40 text-center font-bold hover:cursor-pointer">
					<option value="2023-2024">2022-2023</option>
					<option value="2023-2024">2023-2024</option>
					<option value="2023-2024">2024-2025</option>
				</select>
			</li>
			<NavItem
				className="border-theme-dark-blue border-t-2 tablet:border-t-4 border-b tablet:border-b-2"
				navigate="announcements"
				bgColorNotHover="#084784"
				bgColorHover="#4E7FAE"
				itemName="Announcements"
			/>
			<NavItem
				className="border-theme-dark-blue border-t tablet:border-t-2 border-b tablet:border-b-2"
				navigate="registration"
				bgColorNotHover="#084784"
				bgColorHover="#4E7FAE"
				itemName="Registration"
			/>
			<NavItem
				className="border-theme-dark-blue border-t tablet:border-t-2 border-b tablet:border-b-2"
				navigate="subjects"
				bgColorNotHover="#084784"
				bgColorHover="#4E7FAE"
				itemName="Subjects"
			/>
			<NavItem
				className="border-theme-dark-blue border-t tablet:border-t-2 border-b tablet:border-b-2"
				navigate="attendance"
				bgColorNotHover="#084784"
				bgColorHover="#4E7FAE"
				itemName="Attendance"
			/>
			<NavItem
				className="border-theme-dark-blue border-t tablet:border-t-2 border-b-2 tablet:border-b-4"
				navigate=""
				bgColorNotHover="#084784"
				bgColorHover="#4E7FAE"
				itemName="Enroll Here"
			/>
			<NavLogoutButton
				className="flex flex-row justify-center items-center text-base tablet:text-lg text-white font-bold bg-red-600 hover:bg-red-800 w-36 py-1 rounded-lg gap-2 mt-5 mx-auto"
				buttonIcon={<BsBoxArrowRight />}
				buttonLabel="Logout"
			/>
		</motion.ul>
	);
}
