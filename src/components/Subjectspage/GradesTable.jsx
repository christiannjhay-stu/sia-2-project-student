import TableTd from "./TableTd";
import TableTh from "./TableTh";

export default function () {
	return (
		<table className="w-full table-auto border-separate border-spacing-2">
			<thead className="bg-theme-blue text-white">
				<tr>
					<TableTh className="rounded-tl-lg" title="SUBJECT" />
					<TableTh title="1st" />
					<TableTh title="2nd" />
					<TableTh title="3rd" />
					<TableTh title="4th" />
					<TableTh className="rounded-tr-lg" title="REMAKRS" />
				</tr>
			</thead>
			<tbody className=" bg-white text-center font-bold">
				<tr>
					<TableTd title="Mathematics" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="PASSED" />
				</tr>
				<tr>
					<TableTd title="Literature" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="PASSED" />
				</tr>
			</tbody>
			<tfoot className="h-9 bg-theme-blue desktop:h-10">
				<tr>
					<td className="rounded-b-lg" colSpan={6}></td>
				</tr>
			</tfoot>
		</table>
	);
}
