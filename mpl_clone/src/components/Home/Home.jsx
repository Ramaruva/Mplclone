import React from "react";
import Footer from "../../footer/Footer";
import Know from "../Know/Know";
import { Middle1 } from "../Middle1";
import { MiddleHome } from "../MiddleHome";
import MplTop from "../MplTop/MplTop";

export const Home = () => {
	return (
		<div>
			<Middle1 />
			<MiddleHome />
			<MplTop/>
			<Know/>
			<Footer />
			
		</div>
	);
};
