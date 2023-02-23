import HeaderStyle1 from "../Headers/HeaderStyle1";
import HeaderStyle2 from "../Headers/HeaderStyle2";
import SubjectsTable from "./SubjectsTable";
import GradesTable from "./GradesTable";

export default function () {
	return (
		<div className="h-screen w-full overflow-x-auto overflow-y-auto bg-theme-light-blue desktop:h-full desktop:w-4/5">
			
			<HeaderStyle1 title="GRADES" />
			<li className="flex flex-row  gap-2 w-42 mx-28 my-8">
				
				<select className="bg-white outline-none rounded-lg py-px w-56 text-center font-bold hover:cursor-pointer">
					<option value="2023-2024">GR 5. LECTUS-HEKASI</option>
					<option value="2023-2024">GR 3. SATURN-MATH</option>
					<option value="2023-2024">GR 2. GUMAMELA-FILIPINO</option>
				</select>
			</li>
			<section className="mx-auto w-1400px px-10 py-5">
				<GradesTable />
			</section>
			<div className="pl-[1250px]">
				<button class="bg-green-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded">
					UPDATE GRADES
				</button>
			</div>
			
		</div>
	);
}
