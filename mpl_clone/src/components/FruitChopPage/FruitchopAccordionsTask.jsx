import React from "react";
import "../Accordions/Accordions.css";
import { Add } from "../Accordions/accordions";
export const FruitchopAccordionsTask = () => {
	return (
		<div>
			<button onClick={Add} className="accordion">
				How many misses are allowed before the game ends?
			</button>
			<div className="panel">
				<p className="paracontent">After three misses, the game ends.</p>
			</div>

			<button onClick={Add} className="accordion">
				Do I get different points for each type of fruit?
			</button>
			<div className="panel">
				<p className="paracontent">
					No, you earn the same amount of points for every individual fruit you
					slice. However, you get bonus points for chopping multiple fruits with
					a single swipe.
				</p>
			</div>
		</div>
	);
};
