import Header from "./Header";
import EnrollmentForm from "./EnrollmentForm";

export default function () {
	return (
		<div>
			<Header />
			<main className="w-full h-full overflow-x-auto bg-theme-light-blue">
				<EnrollmentForm />
			</main>
		</div>
	);
}
