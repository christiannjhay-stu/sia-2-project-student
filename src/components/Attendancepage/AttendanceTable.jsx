import TableTh from "./TableTh";
import TableTd from "./TableTd";

export default function (props) {
	return (
		<table className="mx-auto w-70% border-separate border-spacing-2">
			<thead className="bg-theme-blue text-lg tracking-widest text-white tablet:text-xl desktop:text-2xl">
				<tr>
					<TableTh className="w-40%" title="WEEK" />
					<TableTh className="w-10%" title="M" />
					<TableTh className="w-10%" title="T" />
					<TableTh className="w-10%" title="W" />
					<TableTh className="w-10%" title="TH" />
					<TableTh className="w-10%" title="F" />
				</tr>
			</thead>
			<tbody className="bg-white text-center text-lg font-bold tablet:text-xl desktop:text-2xl">
				<tr>
					<TableTd title="Gravida, Curabitur" />
					<TableTd className="text-green-500" title="P" />
					<TableTd className="text-green-500" title="P" />
					<TableTd className="text-red-500" title="A" />
					<TableTd className="text-gray-500" title="E" />
					<TableTd className="text-green-500" title="P" />
				</tr>
				<tr>
					<TableTd title="Student 2" />
					<TableTd className="text-green-500" title="P" />
					<TableTd className="text-green-500" title="P" />
					<TableTd className="text-red-500" title="A" />
					<TableTd className="text-gray-500" title="E" />
					<TableTd className="text-green-500" title="P" />
				</tr>
				<tr>
					<TableTd title="Student 3" />
					<TableTd className="text-green-500" title="P" />
					<TableTd className="text-green-500" title="P" />
					<TableTd className="text-red-500" title="A" />
					<TableTd className="text-gray-500" title="E" />
					<TableTd className="text-green-500" title="P" />
				</tr>
			</tbody>
			<tfoot className="h-9 bg-theme-blue desktop:h-10">
				<tr>
					
				<td className="rounded-b-lg" colSpan={6}> 
					<div className="flex flex-row gap-% pl-[1190px] px-4 text-lg font-bold text-white">

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
