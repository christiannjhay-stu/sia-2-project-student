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
					<AttendanceButton
						className="flex-row"
						buttonText="PREVIOUS"
						icon={<BsCaretLeftFill className="mb-1" />}
					/>
					<H1Month month="JANUARY" />
					<AttendanceButton
						className="flex-row-reverse"
						buttonText="NEXT"
						icon={<BsCaretRightFill className="mb-1" />}
					/>
				</div>

				<hr className="my-5 border-4 border-theme-yellow" />

				<AttendanceTable />
			</section>
		</div>
	);
}
