import HeaderStyle1 from "../Headers/HeaderStyle1";
import HeaderStyle2 from "../Headers/HeaderStyle2";
import SubjectsTable from "./SubjectsTable";
import GradesTable from "./GradesTable";

export default function () {
	return (
		<div className="h-screen w-full overflow-x-auto overflow-y-auto bg-theme-light-blue desktop:h-full desktop:w-4/5">
			<HeaderStyle1 title="SUBJECTS" />

			<section className="mx-auto w-1400px px-10 py-5">
				<SubjectsTable />
			</section>

			<HeaderStyle2 title="GRADES" />

			<section className="mx-auto w-1400px px-10 py-5">
				<GradesTable />
			</section>
		</div>
	);
}
