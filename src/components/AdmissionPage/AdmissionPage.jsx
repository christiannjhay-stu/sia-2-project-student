import Header from "./Header";
import AdmissionForm from "./AdmissionForm";

export default function () {
	return (
		<div>
			<Header />
			<main className="w-full h-full overflow-x-auto bg-theme-light-blue">
				<AdmissionForm />
			</main>
		</div>
	);
}
