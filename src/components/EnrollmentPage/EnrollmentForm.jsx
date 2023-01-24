// import { useState } from "react";
import EnrollmentPageInput from "./EnrollmentPageInput";

export default function () {
	return (
		<form className="flex flex-col w-75rem mx-auto py-20 px-10 desktop:px-0">
			<section className="my-5">
				<div className="bg-gainsboro py-1">
					<h2 className="font-bold text-xl tracking-widest text-center">STUDENT INFORMATION</h2>
				</div>

				<div className="flex flex-row gap-5 my-5">
					<div className="w-1/2">
						<label htmlFor="birthCertNum">PSA Birth Certificate No.</label>
						<EnrollmentPageInput
							className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue rounded-lg w-full h-12 pl-3 shadow-md shadow-stone-900/50"
							id="birthCertNum"
							type="number"
						/>
					</div>

					<div className="w-1/2">
						<label htmlFor="LRNNum">Learning Reference No. (LRN)</label>
						<EnrollmentPageInput
							className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue rounded-lg w-full h-12 pl-3 shadow-md shadow-stone-900/50"
							id="LRNNum"
							type="number"
						/>
					</div>
				</div>

				<div className="flex flex-row mt-5 w-full">
					<div className="flex flex-row items-center">
						<label htmlFor="birthCertImg">Picture of your Birth Certificate</label>
						<EnrollmentPageInput
							className="file:bg-theme-blue file:text-white file:border-none file:hover:cursor-pointer file:rounded file:py-1 file:w-32 mx-2"
							id="birthCertImg"
							type="file"
						/>
					</div>

					<div className="flex flex-row items-center">
						<label htmlFor="presentGrLvl">Grade Level &#40;Present&#41;</label>
						<EnrollmentPageInput
							className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue w-20 h-12 shadow-md shadow-stone-900/50 text-center mx-2"
							id="presentGrLvl"
							type="number"
						/>
					</div>
				</div>

				<div className="w-full mb-5">
					<label htmlFor="previousSchoolName">Previous School Name</label>
					<EnrollmentPageInput
						className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue w-full h-12 shadow-md shadow-stone-900/50 pl-3"
						id="previousSchoolName"
						type="text"
					/>
				</div>

				<hr className="my-5 h-5 bg-gainsboro" />

				<div className="flex flex-row w-full my-5 gap-5">
					<div className="flex flex-col w-full">
						<label htmlFor="lastName">Last Name</label>
						<EnrollmentPageInput
							className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue w-full h-12 shadow-md shadow-stone-900/50 pl-3"
							id="lastName"
							type="text"
						/>
					</div>

					<div className="flex flex-col w-full">
						<label htmlFor="firstName">First Name</label>
						<EnrollmentPageInput
							className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue w-full h-12 shadow-md shadow-stone-900/50 pl-3"
							id="firstName"
							type="text"
						/>
					</div>

					<div className="flex flex-col w-full">
						<label htmlFor="middleName">Middle Name</label>
						<EnrollmentPageInput
							className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue w-full h-12 shadow-md shadow-stone-900/50 pl-3"
							id="middleName"
							type="text"
						/>
					</div>
				</div>

				<div className="flex flex-row gap-5 my-5">
					<div className="flex flex-row items-center pt-6">
						<label htmlFor="extensionName">
							Extension Name e.g. Jr., III &#40;If applicable&#41;
						</label>
						<EnrollmentPageInput
							className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue w-20 h-12 shadow-md shadow-stone-900/50 text-center ml-2"
							id="extensionName"
							type="text"
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="dateOfBirth">Date of Birth</label>
						<div className="flex flex-row">
							<EnrollmentPageInput
								className="text-center focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue h-12 px-5 shadow-md shadow-stone-900/50"
								id="dateOfBirth"
								type="date"
								placeholder="MM"
							/>
						</div>
					</div>

					<div className="flex flex-col">
						<label htmlFor="age">Age</label>
						<EnrollmentPageInput
							className="text-center focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue h-12 w-20 shadow-md shadow-stone-900/50"
							id="age"
							type="number"
						/>
					</div>

					<div className="flex flex-col">
						<label>Sex</label>
						<div className="flex flex-row">
							<EnrollmentPageInput id="maleOption" name="gender" type="radio" value="Male" />
							<label className="ml-2 mr-5" htmlFor="maleOption">
								Male
							</label>
							<EnrollmentPageInput id="femaleOption" name="gender" type="radio" value="Female" />
							<label className="ml-2" htmlFor="femaleOption">
								Female
							</label>
						</div>
					</div>
				</div>

				<div className="flex flex-row gap-5 my-5">
					<div className="flex flex-row w-2/5 items-center">
						<p>
							Belonging to any Indigenous Peoples &#40;IP&#41;
							<br /> Community/Indigenous Cultural Community?
						</p>
						<EnrollmentPageInput
							className="ml-10"
							id="yesOption"
							name="indigenousCommunityOptions"
							type="radio"
							value="yes"
						/>
						<label className="ml-2 mr-10" htmlFor="yesOption">
							Yes
						</label>
						<EnrollmentPageInput
							id="noOption"
							name="indigenousCommunityOptions"
							type="radio"
							value="no"
						/>
						<label className="ml-2" htmlFor="noOption">
							No
						</label>
					</div>

					<div className="flex flex-row w-3/5 items-center">
						<label className="" htmlFor="ifYes">
							If Yes, please specify:
						</label>
						<EnrollmentPageInput
							className="ml-2 h-12 grow focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="ifYes"
							type="text"
						/>
					</div>
				</div>

				<div className="flex flex-row gap-5">
					<div className="flex flex-col w-full">
						<label htmlFor="motherTongue">Mother Tongue</label>
						<EnrollmentPageInput
							className="w-full h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="motherTongue"
						/>
					</div>

					<div className="flex flex-col w-full">
						<label htmlFor="bloodType">Blood Type</label>
						<EnrollmentPageInput
							className="w-20 h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="bloodType"
						/>
					</div>
					<div className="w-full"></div>
				</div>
			</section>

			<section className="my-5">
				<div className="bg-gainsboro py-1">
					<h2 className="font-bold text-xl tracking-widest text-center">ADDRESS</h2>
				</div>

				<div className="flex flex-row my-5 gap-5">
					<div className="flex flex-col w-full">
						<label htmlFor="">House Number and Street</label>
						<EnrollmentPageInput
							className="h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="houseNumberStreet"
							type="text"
						/>
					</div>

					<div className="flex flex-col w-full">
						<label htmlFor="barangay">Barangay</label>
						<EnrollmentPageInput
							className="h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="barangay"
							type="text"
						/>
					</div>
				</div>

				<div className="flex flex-row my-5 gap-5">
					<div className="flex flex-col w-full">
						<label htmlFor="cityMuniProvCountry">City/Municipality/Province/Country</label>
						<EnrollmentPageInput
							className="h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="cityMuniProvCountry"
							type="text"
						/>
					</div>

					<div className="flex flex-col w-full">
						<label>Zip Code</label>
						<div className="flex flex-row gap-5">
							<EnrollmentPageInput
								className="w-12 h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 text-center"
								maxLength="1"
								type="text"
							/>
							<EnrollmentPageInput
								className="w-12 h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 text-center"
								maxLength="1"
								type="text"
							/>
							<EnrollmentPageInput
								className="w-12 h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 text-center"
								maxLength="1"
								type="text"
							/>
							<EnrollmentPageInput
								className="w-12 h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 text-center"
								maxLength="1"
								type="text"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="my-5">
				<div className="bg-gainsboro py-1">
					<h2 className="font-bold text-xl tracking-widest text-center">
						PARENT&#39;S&#47;GUARDIAN&#39;S INFORMATION
					</h2>
				</div>

				<div className="flex flex-row mt-5 gap-5">
					<div className="flex flex-col w-full">
						<label htmlFor="fatherName">
							Father&#39;s Name &#40;Last Name, First Name, Middle Name&#41;
						</label>
						<EnrollmentPageInput
							className="h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="fatherName"
							type="text"
						/>
					</div>

					<div className="flex flex-col w-full">
						<label htmlFor="mohterName">
							Mother&#39;s Maiden Name &#40;Last Name, First Name, Middle Name&#41;
						</label>
						<EnrollmentPageInput
							className="h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="motherName"
							type="text"
						/>
					</div>
				</div>

				<div className="flex flex-row mt-5 gap-5">
					<div className="flex flex-col w-1/2">
						<label htmlFor="guardianName">
							Guardian&#39;s Name &#40;Last Name, First Name, Middle Name&#41;
						</label>
						<EnrollmentPageInput
							className="h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="guardianName"
							type="text"
						/>
					</div>

					<div className="flex flex-row w-1/2 gap-5">
						<div className="flex flex-col w-1/2">
							<label htmlFor="telephoneNum">Telephone No.</label>
							<EnrollmentPageInput
								className="h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
								id="telephoneNum"
								type="number"
							/>
						</div>
						<div className="flex flex-col w-1/2">
							<label htmlFor="telephoneNum">Cellphone No.</label>
							<EnrollmentPageInput
								className="h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
								id="telephoneNum"
								type="number"
							/>
						</div>
					</div>
				</div>

				<hr className="mt-5 h-5 bg-gainsboro" />
			</section>

			<section className="w-full flex flex-row justify-end">
				<button className="bg-green-500 text-xl text-white font-bold py-2 w-44 rounded" type="submit">
					Submit
				</button>
			</section>
		</form>
	);
}
