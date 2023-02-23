import HeaderStyle1 from "../Headers/HeaderStyle1";
import H1Month from "./H1Month";
import AttendanceButton from "./AttendanceButton";
import AttendanceTable from "./AttendanceTable";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

export default function () {
	return (
		<div className="h-screen w-full overflow-x-auto overflow-y-auto bg-theme-light-blue desktop:h-full desktop:w-4/5">
			<HeaderStyle1 title="ATTENDANCE" />

			<section className="mx-auto w-1400px px-10 py-5">
				<div className="flex flex-row items-center justify-center gap-10">
					
					<H1Month month="GR:5 LECTUS" />
					<li className="flex flex-row  gap-2 w-42 mx-1 my-8">
						<select className="bg-white outline-none rounded-lg py-px w-56 text-center font-bold hover:cursor-pointer">
							<option value="2023-2024">AUGUST</option>
							<option value="2023-2024">SEPTEMBER</option>
							<option value="2023-2024">OCTOBER</option>
						</select>
					</li>
					<li className="flex flex-row  gap-2 w-42 mx-1 my-8">
						<select className="bg-white outline-none rounded-lg py-px w-56 text-center font-bold hover:cursor-pointer">
							<option value="2023-2024">WEEK 1</option>
							<option value="2023-2024">WEEK 2</option>
							<option value="2023-2024">WEEK 3</option>
						</select>
					</li>
				</div>

				<hr className="my-5 border-4 border-theme-yellow" />

				<AttendanceTable />
				
			</section>
		</div>
	);
}
