import React from "react";
import "../Accordions/Accordions.css";
import { Add } from "../Accordions/accordions";
export const RunnerNoAccordionsTask = () => {
	return (
		<div>
			<button onClick={Add} className="accordion">
				How do I control the lane in which the character is running?
			</button>
			<div className="panel">
				<p className="paracontent">
					You can control the lane in which your character runs by tilting your
					phone to the left or right as required.
				</p>
			</div>

			<button onClick={Add} className="accordion">
				Is there a use in collecting the gold coins while playing?
			</button>
			<div className="panel">
				<p className="paracontent">
					Collecting coins during your run adds valuable Bonus points to your
					final score. You should therefore try to collect as many coins as you
					can.
				</p>
			</div>
			<button onClick={Add} className="accordion">
				How do I make the character turn left or right?
			</button>
			<div className="panel">
				<p className="paracontent">
					You need to swipe in the respective direction (left or right) to make
					your character turn. Remember to turn in time before your character
					hits an obstacle or runs off the cliff!
				</p>
			</div>
		</div>
	);
};
