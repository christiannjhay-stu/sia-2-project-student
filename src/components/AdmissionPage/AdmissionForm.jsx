import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdmissionPageInput from "./AdmissionPageInput";

export default function () {
	const navigate = useNavigate();

	const [studentInfo, setStudentInfo] = useState({
		birthCertNum: "",
		LRNNum: "",
		//birth cert picture not yet implemented
		presentGrLvl: "",
		previousSchoolName: "",
		lastName: "",
		firstName: "",
		middleName: "",
		extensionName: "",
		dateOfBirth: "",
		age: "",
		gender: "",
		indigenousCommunityOptions: "",
		IPGroup: "",
		motherTongue: "",
		bloodType: "",
		houseNumberStreet: "",
		barangay: "",
		cityMuniProvCountry: "",
		zipCode: "",
		fatherName: "",
		motherName: "",
		guardianName: "",
		telephoneNum: "",
		cellphoneNum: "",
	});

	function handleSubmit(e) {
		e.preventDefault();
		console.log(studentInfo);

		axios.post("http://localhost:5000/students", studentInfo).then(({ data }) => {
			if (data.success) {
				navigate("/enrollment/success");
			} else {
				navigate("/enrollment/failed");
			}
		});
	}

	function handleChange(e) {
		const { name, value } = e.target;

		setStudentInfo((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col w-75rem mx-auto py-20 px-10 desktop:px-0"
		>
			<section className="my-5">
				<div className="bg-gainsboro py-1">
					<h2 className="font-bold text-xl tracking-widest text-center">STUDENT INFORMATION</h2>
				</div>

				<div className="flex flex-row gap-5 my-5">
					<div className="w-1/2">
						<label htmlFor="birthCertNum">PSA Birth Certificate No.</label>
						<AdmissionPageInput
							onChange={handleChange}
							className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue rounded-lg w-full h-12 pl-3 shadow-md shadow-stone-900/50"
							id="birthCertNum"
							name="birthCertNum"
							type="number"
							value={studentInfo.birthCertNum}
							required={true}
						/>
					</div>

					<div className="w-1/2">
						<label htmlFor="LRNNum">Learning Reference No. (LRN)</label>
						<AdmissionPageInput
							onChange={handleChange}
							className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue rounded-lg w-full h-12 pl-3 shadow-md shadow-stone-900/50"
							id="LRNNum"
							name="LRNNum"
							type="number"
							value={studentInfo.LRNNum}
							required={true}
						/>
					</div>
				</div>

				<div className="flex flex-row mt-5 w-full">
					<div className="flex flex-row items-center">
						<label htmlFor="birthCertImg">Picture of your Birth Certificate</label>
						<AdmissionPageInput
							className="file:bg-theme-blue file:text-white file:border-none file:hover:cursor-pointer file:rounded file:py-1 file:w-32 mx-2"
							id="birthCertImg"
							name="birthCertImg"
							type="file"
							required={false} //required this if implemented
						/>
					</div>

					<div className="flex flex-row items-center">
						<label htmlFor="presentGrLvl">Grade Level &#40;Present&#41;</label>
						<AdmissionPageInput
							onChange={handleChange}
							className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue w-20 h-12 shadow-md shadow-stone-900/50 text-center mx-2"
							id="presentGrLvl"
							name="presentGrLvl"
							type="number"
							value={studentInfo.presentGrLvl}
							required={true}
						/>
					</div>
				</div>

				<div className="w-full mb-5">
					<label htmlFor="previousSchoolName">Previous School Name</label>
					<AdmissionPageInput
						onChange={handleChange}
						className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue w-full h-12 shadow-md shadow-stone-900/50 pl-3"
						id="previousSchoolName"
						name="previousSchoolName"
						type="text"
						value={studentInfo.previousSchoolName}
						required={true}
					/>
				</div>

				<hr className="my-5 h-5 bg-gainsboro" />

				<div className="flex flex-row w-full my-5 gap-5">
					<div className="flex flex-col w-full">
						<label htmlFor="lastName">Last Name</label>
						<AdmissionPageInput
							onChange={handleChange}
							className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue w-full h-12 shadow-md shadow-stone-900/50 pl-3"
							id="lastName"
							name="lastName"
							type="text"
							value={studentInfo.lastName}
							required={true}
						/>
					</div>

					<div className="flex flex-col w-full">
						<label htmlFor="firstName">First Name</label>
						<AdmissionPageInput
							onChange={handleChange}
							className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue w-full h-12 shadow-md shadow-stone-900/50 pl-3"
							id="firstName"
							name="firstName"
							type="text"
							value={studentInfo.firstName}
							required={true}
						/>
					</div>

					<div className="flex flex-col w-full">
						<label htmlFor="middleName">Middle Name</label>
						<AdmissionPageInput
							onChange={handleChange}
							className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue w-full h-12 shadow-md shadow-stone-900/50 pl-3"
							id="middleName"
							name="middleName"
							type="text"
							value={studentInfo.middleName}
							required={true}
						/>
					</div>
				</div>

				<div className="flex flex-row gap-5 my-5">
					<div className="flex flex-row items-center pt-6">
						<label htmlFor="extensionName">
							Extension Name e.g. Jr., III &#40;If applicable&#41;
						</label>
						<AdmissionPageInput
							onChange={handleChange}
							className="focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue w-20 h-12 shadow-md shadow-stone-900/50 text-center ml-2"
							id="extensionName"
							name="extensionName"
							type="text"
							value={studentInfo.extensionName}
							required={false}
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="dateOfBirth">Date of Birth</label>
						<div className="flex flex-row">
							<AdmissionPageInput
								onChange={handleChange}
								className="text-center focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue h-12 px-5 shadow-md shadow-stone-900/50"
								id="dateOfBirth"
								name="dateOfBirth"
								type="date"
								value={studentInfo.dateOfBirth}
								required={true}
							/>
						</div>
					</div>

					<div className="flex flex-col">
						<label htmlFor="age">Age</label>
						<AdmissionPageInput
							onChange={handleChange}
							className="text-center focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue h-12 w-20 shadow-md shadow-stone-900/50"
							id="age"
							name="age"
							type="number"
							value={studentInfo.age}
							required={true}
						/>
					</div>

					<div className="flex flex-col">
						<label>Gender</label>
						<div className="flex flex-row">
							<AdmissionPageInput
								onChange={handleChange}
								id="maleOption"
								name="gender"
								type="radio"
								value="Male"
							/>
							<label className="ml-2 mr-5" htmlFor="maleOption">
								Male
							</label>
							<AdmissionPageInput
								onChange={handleChange}
								id="femaleOption"
								name="gender"
								type="radio"
								value="Female"
							/>
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
						<AdmissionPageInput
							onChange={handleChange}
							className="ml-10"
							id="yesOption"
							name="indigenousCommunityOptions"
							type="radio"
							value="yes"
						/>
						<label className="ml-2 mr-10" htmlFor="yesOption">
							Yes
						</label>
						<AdmissionPageInput
							onChange={handleChange}
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
						<AdmissionPageInput
							onChange={handleChange}
							className="ml-2 h-12 grow focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="IPGroup"
							name="IPGroup"
							type="text"
							value={studentInfo.IPGroup}
							required={false}
						/>
					</div>
				</div>

				<div className="flex flex-row gap-5">
					<div className="flex flex-col w-full">
						<label htmlFor="motherTongue">Mother Tongue</label>
						<AdmissionPageInput
							onChange={handleChange}
							className="w-full h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="motherTongue"
							name="motherTongue"
							value={studentInfo.motherTongue}
							required={true}
						/>
					</div>

					<div className="flex flex-col w-full">
						<label htmlFor="bloodType">Blood Type</label>
						<AdmissionPageInput
							onChange={handleChange}
							className="w-20 h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 text-center"
							id="bloodType"
							name="bloodType"
							value={studentInfo.bloodType}
							required={true}
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
						<AdmissionPageInput
							onChange={handleChange}
							className="h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="houseNumberStreet"
							name="houseNumberStreet"
							type="text"
							value={studentInfo.houseNumberStreet}
							required={true}
						/>
					</div>

					<div className="flex flex-col w-full">
						<label htmlFor="barangay">Barangay</label>
						<AdmissionPageInput
							onChange={handleChange}
							className="h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="barangay"
							name="barangay"
							type="text"
							value={studentInfo.barangay}
							required={true}
						/>
					</div>
				</div>

				<div className="flex flex-row my-5 gap-5">
					<div className="flex flex-col w-4/5">
						<label htmlFor="cityMuniProvCountry">City/Municipality/Province/Country</label>
						<AdmissionPageInput
							onChange={handleChange}
							className="w-full h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="cityMuniProvCountry"
							name="cityMuniProvCountry"
							type="text"
							value={studentInfo.cityMuniProvCountry}
							required={true}
						/>
					</div>

					<div className="flex flex-col w-1/5">
						<label>Zip Code</label>
						<div className="flex flex-row gap-5">
							<AdmissionPageInput
								onChange={handleChange}
								className="w-full h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 text-center"
								id="zipCode"
								name="zipCode"
								maxLength="4"
								type="text"
								value={studentInfo.zipCode}
								required={true}
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
						<AdmissionPageInput
							onChange={handleChange}
							className="h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="fatherName"
							name="fatherName"
							type="text"
							value={studentInfo.fatherName}
							required={true}
						/>
					</div>

					<div className="flex flex-col w-full">
						<label htmlFor="mohterName">
							Mother&#39;s Maiden Name &#40;Last Name, First Name, Middle Name&#41;
						</label>
						<AdmissionPageInput
							onChange={handleChange}
							className="h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="motherName"
							name="motherName"
							type="text"
							value={studentInfo.motherName}
							required={true}
						/>
					</div>
				</div>

				<div className="flex flex-row mt-5 gap-5">
					<div className="flex flex-col w-1/2">
						<label htmlFor="guardianName">
							Guardian&#39;s Name &#40;Last Name, First Name, Middle Name&#41;
						</label>
						<AdmissionPageInput
							onChange={handleChange}
							className="h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
							id="guardianName"
							name="guardianName"
							type="text"
							value={studentInfo.guardianName}
							required={true}
						/>
					</div>

					<div className="flex flex-row w-1/2 gap-5">
						<div className="flex flex-col w-1/2">
							<label htmlFor="telephoneNum">Telephone No.</label>
							<AdmissionPageInput
								onChange={handleChange}
								className="h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
								id="telephoneNum"
								name="telephoneNum"
								type="number"
								value={studentInfo.telephoneNum}
								required={false}
							/>
						</div>
						<div className="flex flex-col w-1/2">
							<label htmlFor="cellphoneNum">Cellphone No.</label>
							<AdmissionPageInput
								onChange={handleChange}
								className="h-12 focus:outline-none focus:border-blue-700 bg-white border-2 border-theme-blue shadow-md shadow-stone-900/50 pl-3"
								id="cellphoneNum"
								name="cellphoneNum"
								type="number"
								maxLength="11"
								value={studentInfo.cellphoneNum}
								required={true}
							/>
						</div>
					</div>
				</div>

				<hr className="mt-5 h-5 bg-gainsboro" />
			</section>

			<section className="w-full flex flex-row justify-end">
				<button
					className="bg-green-500 text-xl text-white font-bold py-2 w-44 rounded"
					type="submit"
				>
					Submit
				</button>
			</section>
		</form>
	);
}
