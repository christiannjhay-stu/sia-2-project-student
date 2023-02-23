import HeaderStyle1 from "../Headers/HeaderStyle1";
import RegistrationDivInfo from "./RegistrationDivInfo";
import RegistrationDivHeader from "./RegistrationDivHeader";

export default function () {
	return (
		<div className="h-screen w-full overflow-x-auto overflow-y-auto bg-theme-light-blue desktop:h-full desktop:w-4/5">
			<HeaderStyle1 title="PROFILE" />

			<section className="mx-auto flex w-1500px flex-col gap-5 px-10 py-5">
				<RegistrationDivHeader title="TEACHER INFORMATION" />

				<div className="flex flex-row gap-2%">
					<RegistrationDivInfo
						className="flex w-28% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Last Name"
						information="Martinez"
					/>
					<RegistrationDivInfo
						className="flex w-28% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="First Name"
						information="Sage"
					/>
					<RegistrationDivInfo
						className="flex w-28% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Middle Name"
						information="Yu"
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
						className="flex  w-13% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Date of Birth (MM/DD/YY)"
						information="05/28/2001"
					/>
					
					
					<RegistrationDivInfo
						className="flex w-7% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Age"
						information="21"
					/>
					<RegistrationDivInfo
						className="flex w-10% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Gender"
						information="Male"
					/>
					<RegistrationDivInfo
						className="flex w-8% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Blood Type"
						information="O"
					/>
					<RegistrationDivInfo
						className="flex w-28% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Mother Tongue"
						information="Tagalog"
					/>
					
				</div>

				<div className="flex flex-row gap-2%">
					<RegistrationDivInfo
						className="flex  w-28% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Cellphone No."
						information="09322373739"
					/>
					<RegistrationDivInfo
						className="flex  w-28% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Telephone No."
						information="82002367"
					/>
					<RegistrationDivInfo
						className="flex  w-28% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Emergency Contact No."
						information="09853273623"
					/>
					
				</div>
			</section>

			<section className="mx-auto flex w-1500px flex-col gap-5 px-10 py-5">
				<RegistrationDivHeader title="ADVISORY" />

				<div className="flex flex-row gap-2%">
					<RegistrationDivInfo
						className="flex  w-10% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Grade Level"
						information="5"
					/>
					<RegistrationDivInfo
						className="flex w-18% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Section"
						information="N/A"
					/>
					<RegistrationDivInfo
						className="flex w-70% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Assigned Subjects"
						information="Math 6, Math 5"
					/>
				</div>

				
			</section>

			<section className="mx-auto flex w-1500px flex-col gap-5 px-10 py-5">
				<RegistrationDivHeader title="ADDRESS" />

				<div className="flex flex-row gap-2%">
					<RegistrationDivInfo
						className="flex w-49% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Region"
						information="Mindanao"
					/>
					<RegistrationDivInfo
						className="flex w-49% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Province"
						information="Davao Del Sur"
					/>
					<RegistrationDivInfo
						className="flex w-49% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="City"
						information="Davao City"
					/>
					<RegistrationDivInfo
						className="flex w-49% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Barangay"
						information="Acacia"
					/>
				</div>

				<div className="flex flex-row gap-2%">
					<RegistrationDivInfo
						className="flex w-49% flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="House Nuber and Street"
						information="23 Atis st."
					/>
					
					<RegistrationDivInfo
						className="w-8%  flex flex-col"
						className2="w-full rounded-lg bg-theme-gray py-2 pl-3 shadow-md shadow-stone-900/50"
						label="Zip Code"
						information="8000"
					/>
				</div>
			</section>
		</div>
	);
}
