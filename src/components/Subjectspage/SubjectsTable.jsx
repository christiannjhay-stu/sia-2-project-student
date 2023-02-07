import TableTd from "./TableTd";
import TableTh from "./TableTh";

export default function (props) {
	return (
		<table className="w-full table-auto border-separate border-spacing-2">
			<thead className="bg-theme-blue text-white">
				<tr>
					<TableTh className="rounded-tl-lg" title="SUBJECT" />
					<TableTh title="TEACHER" />
					<TableTh className="rounded-tr-lg" colSpan={2} title="SCHEDULE" />
				</tr>
			</thead>
			<tbody className=" bg-white text-center font-bold">
				<tr>
					<TableTd title="Mathematics" />
					<TableTd title="Amet Consectetur" />
					<TableTd title="08:30AM - 09:30AM" />
					<TableTd title="M-T-W-TH-F" />
				</tr>
				<tr>
					<TableTd title="Literature" />
					<TableTd title="Amet Consectetur" />
					<TableTd title="10:30AM - 11:30AM" />
					<TableTd title="T-TH" />
				</tr>
			</tbody>
			<tfoot className="h-9 bg-theme-blue desktop:h-10">
				<tr>
					<td className="rounded-b-lg" colSpan={4}></td>
				</tr>
			</tfoot>
		</table>
	);
}
