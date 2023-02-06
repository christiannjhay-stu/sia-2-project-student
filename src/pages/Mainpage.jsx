import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

export default function () {
	return (
		<div className="flex flex-col desktop:flex-row desktop:h-screen bg-theme-light-blue">
			<NavBar studentName="Curabitur Gravida" />
			<Outlet />
		</div>
	);
}
