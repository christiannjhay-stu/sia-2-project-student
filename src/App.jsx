import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Admissionpage from "./pages/Admissionpage";
import AdmissionSuccessPage from "./pages/AdmissionSuccessPage";
import AdmissionFailedPage from "./pages/AdmissionFailedPage";
import Mainpage from "./pages/Mainpage";
import Announcements from "./components/Announcementspage/Announcements";
import Registration from "./components/Registrationpage/Registration";
import Subjects from "./components/Subjectspage/Subjects";
import Attendance from "./components/Attendancepage/Attendance";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Loginpage />,
	},
	{
		path: "/admission",
		element: <Admissionpage />,
	},
	{
		path: "/admission/success",
		element: <AdmissionSuccessPage />,
	},
	{
		path: "/admission/failed",
		element: <AdmissionFailedPage />,
	},
	{
		path: "/student",
		element: <Mainpage />,
		children: [
			{
				path: "announcements",
				element: <Announcements />,
			},
			{
				path: "registration",
				element: <Registration />,
			},
			{
				path: "subjects",
				element: <Subjects />,
			},
			{
				path: "attendance",
				element: <Attendance />,
			},
		],
	},
]);

export default function () {
	return <RouterProvider router={router} />;
}
