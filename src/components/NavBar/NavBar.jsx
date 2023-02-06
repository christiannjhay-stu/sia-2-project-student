import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsList, BsBoxArrowRight } from "react-icons/bs";
import SchoolLogo from "../../assets/logo.webp";
import NavItem from "./NavItem";
import NavButton from "./NavButton";
import NavLogoutButton from "./NavLogoutButton";
import DesktopNavItems from "./DesktopNavItems";
import MobileNavItems from "./MobileNavItems";

export default function (props) {
	const [navItemsIsVisible, setNavItemsIsVisible] = useState(false);

	useEffect(() => {
		function handleWindowResize() {
			window.innerWidth >= 1366 && setNavItemsIsVisible(false);
		}

		window.addEventListener("resize", handleWindowResize);
	});

	function handleClick(e) {
		navItemsIsVisible ? setNavItemsIsVisible(false) : setNavItemsIsVisible(true);
	}

	return (
		<div className="w-full desktop:w-1/5 h-fit desktop:h-screen bg-theme-light-blue">
			{/*Mag pakita lang itong header na element kapang ang screen < 1366px*/}
			<div className="flex flex-row items-center desktop:hidden h-10 tablet:h-16 bg-theme-blue-darker">
				<NavButton buttonIcon={<BsList />} onClick={handleClick} />
				<div className="flex flex-row justify-center items-center gap-2 grow">
					<img className="w-8 tablet:w-14 h-8 tablet:h-14" src={SchoolLogo} />
					<p className="text-white text-center text-sm tablet:text-2xl font-bold">
						Antonio Pichon Jr. Elementary School
					</p>
				</div>
			</div>

			{/*Mag display itong ul na element kapag desktop(width > 1366px)*/}
			<DesktopNavItems studentName={props.studentName} />

			<AnimatePresence>
				{/*Mag display lang itong ul kapag mobile(width < 1366px) */}
				{navItemsIsVisible && <MobileNavItems studentName={props.studentName} />}
			</AnimatePresence>
		</div>
	);
}
