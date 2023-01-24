import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import EnrollmentPage from "./components/EnrollmentPage/EnrollmentPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
	},
	{
		path: "enrollment",
		element: <EnrollmentPage />,
	},
]);

export default function () {
	return <RouterProvider router={router} />;
}
