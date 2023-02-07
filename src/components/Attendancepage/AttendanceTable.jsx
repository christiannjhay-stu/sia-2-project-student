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
					<TableTd title="Week 1" />
					<TableTd className="text-green-500" title="P" />
					<TableTd className="text-green-500" title="P" />
					<TableTd className="text-red-500" title="A" />
					<TableTd className="text-gray-500" title="E" />
					<TableTd className="text-green-500" title="P" />
				</tr>
			</tbody>
		</table>
	);
}
