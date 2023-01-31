import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import AdmissionPage from "./components/AdmissionPage/AdmissionPage";
import AdmissionSuccessPage from "./components/AdmissionPage/AdmissionSuccessPage";
import AdmissionFailedPage from "./components/AdmissionPage/AdmissionFailedPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
	},
	{
		path: "/admission",
		element: <AdmissionPage />,
	},
	{
		path: "/admission/success",
		element: <AdmissionSuccessPage />,
	},
	{
		path: "/admission/failed",
		element: <AdmissionFailedPage />,
	},
]);

export default function () {
	return <RouterProvider router={router} />;
}
