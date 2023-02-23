import TableTd from "./TableTd";
import TableTh from "./TableTh";

export default function () {
	return (
		<table className="w-full table-auto border-separate border-spacing-2">
			<thead className="bg-theme-blue text-white">
				<tr>
					<TableTh className="rounded-tl-lg" title="Name" />
					<TableTh title="1st" />
					<TableTh title="2nd" />
					<TableTh title="3rd" />
					<TableTh title="4th" />
					<TableTh className="rounded-tr-lg" title="REMAKRS" />
				</tr>
			</thead>
			<tbody className=" bg-white text-center font-bold">
				<tr>
					
					<TableTd title="Gravida, Curabitur" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="PASSED" />
				</tr>
				<tr>
					<TableTd title="Student 2" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="PASSED" />
				</tr>
				<tr>
					<TableTd title="Student 3" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="PASSED" />
				</tr>
				<tr>
					<TableTd title="Student 4" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="99" />
					<TableTd title="PASSED" />
				</tr>
			</tbody>
			<tfoot className="h-9 bg-theme-blue desktop:h-10">
				<tr>
					
				<td className="rounded-b-lg"  colSpan={6}> 
					<div className="flex flex-row gap-1% pl-[1190px] text-lg font-bold text-white">

					<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"></path>
					</svg>

					<p className="px-3">01</p>


					<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"></path>
					</svg>

					</div>
				</td>
				</tr>
			</tfoot>
			
		</table>
		
		
	);
}
