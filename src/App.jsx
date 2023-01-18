import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/LoginPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
	},
]);

export default function () {
	return <RouterProvider router={router} />;
}
