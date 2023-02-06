import HeaderStyle1 from "../Headers/HeaderStyle1";
import RegistrationDivInfo from "./RegistrationDivInfo";
import RegistrationDivHeader from "./RegistrationDivHeader";

export default function () {
	return (
		<div className="h-screen w-full overflow-x-auto overflow-y-auto bg-theme-light-blue desktop:h-full desktop:w-4/5">
			<HeaderStyle1 title="REGISTRATION" />

			<section className="mx-auto flex w-1500px flex-col gap-5 px-10 py-5">
				<RegistrationDivHeader title="STUDENT INFORMATION" />

				<div className="flex flex-row gap-2%">
					<RegistrationDivInfo
						className="flex w-28% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="LRN"
						information="N/A"
					/>
					<RegistrationDivInfo
						className="flex w-10% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 shadow-md shadow-stone-900/50"
						textAlign="text-center"
						label="Grade Level"
						information="N/A"
					/>
					<RegistrationDivInfo
						className="flex w-16% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Section"
						information="N/A"
					/>
					<RegistrationDivInfo
						className="flex w-28% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Status"
						information="N/A"
					/>
				</div>

				<div className="flex flex-row gap-2%">
					<RegistrationDivInfo
						className="flex  w-28% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Last Name"
						information="N/A"
					/>
					<RegistrationDivInfo
						className="flex w-28% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="First Name"
						information="N/A"
					/>
					<RegistrationDivInfo
						className="flex w-28% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Middle Name"
						information="N/A"
					/>
					<RegistrationDivInfo
						className="flex w-10% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 px-3 shadow-md shadow-stone-900/50 overflow-hidden"
						textAlign="text-center"
						label="Suffix"
						information="n/a"
					/>
				</div>

				<div className="flex flex-row gap-2%">
					<RegistrationDivInfo
						className="flex  w-28% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Date of Birth (YYYY/MM/DD)"
						information="N/A"
					/>
					<RegistrationDivInfo
						className="flex  w-16% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Gender"
						information="N/A"
					/>
					<RegistrationDivInfo
						className="flex  w-10% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 shadow-md shadow-stone-900/50"
						textAlign="text-center"
						label="Blood Type"
						information="N/A"
					/>
					<RegistrationDivInfo
						className="flex  w-28% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Mother Tongue"
						information="N/A"
					/>
				</div>
			</section>

			<section className="mx-auto flex w-1500px flex-col gap-5 px-10 py-5">
				<RegistrationDivHeader title="ADDRESS" />

				<div className="flex flex-row gap-2%">
					<RegistrationDivInfo
						className="flex w-49% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="House Number And Street"
						information="N/A"
					/>
					<RegistrationDivInfo
						className="flex w-49% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Barangay"
						information="N/A"
					/>
				</div>

				<div className="flex flex-row gap-2%">
					<RegistrationDivInfo
						className="flex w-49% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="City/Municipality/Province/Country"
						information="N/A"
					/>
					<RegistrationDivInfo
						className="flex  w-10% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Zip Code"
						information="N/A"
					/>
				</div>
			</section>

			<section className="mx-auto flex w-1500px flex-col gap-5 px-10 py-5">
				<RegistrationDivHeader title="PARENT’S/GUARDIAN’S INFORMATION" />

				<div className="flex flex-row gap-2%">
					<RegistrationDivInfo
						className="flex w-49% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Father's Name"
						information="N/A"
					/>
					<RegistrationDivInfo
						className="flex w-49% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Mother's Maiden Name"
						information="N/A"
					/>
				</div>

				<div className="flex flex-row gap-2%">
					<RegistrationDivInfo
						className="flex w-49% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Guardian's Name"
						information="N/A"
					/>
					<RegistrationDivInfo
						className="w-23.5%  flex flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Telephone No."
						information="N/A"
					/>
					<RegistrationDivInfo
						className="w-23.5%  flex flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Cellphone No."
						information="N/A"
					/>
				</div>
			</section>
		</div>
	);
}
