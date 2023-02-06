import Header from "../components/Admissionpage/Header";
import AdmissionForm from "../components/Admissionpage/AdmissionForm";

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
