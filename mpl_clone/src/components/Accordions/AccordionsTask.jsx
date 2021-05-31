import React from "react";
import "./Accordions.css";
import { Add } from "./accordions";
export const AccordionsTask = () => {
	return (
		<div>
			<button onClick={Add} className="accordion">
				How to score high points in Fruit Dart?
			</button>
			<div className="panel">
				<p>
					In the Fruit Dart game, you score points every time the knife slices
					the fruits. You can score high points in Fruit Dart by slicing more
					than one fruit with the same knife. When you slice multiple fruits
					with the same dart, it’s considered a fruit combo that scores more
					points. You can also increase your points by hitting the power-ups.
				</p>
			</div>

			<button onClick={Add} className="accordion">
				How to win the Fruit Dart game on MPL?
			</button>
			<div className="panel">
				<p>
					When you play Fruit Dart on MPL, you are competing for points against
					a random opponent. To win against your opponent, you need a higher
					score than the opponent. Aim for fruit combo shots to multiply your
					score and ensure you don’t hit any bombs. If you slice a bomb, you
					lose the game. The power-up in the game will also help you increase
					your score and win the Fruit Dart game.
				</p>
			</div>

			<button onClick={Add} className="accordion">
				How can I win cash from Fruit Dart?
			</button>
			<div className="panel">
				<p>
					You can win real cash by playing the Fruit Dart game on the MPL app.
					Just download the MPL Fruit Dart app and choose the battle you want to
					enter in. When you score higher points than your opponent in a
					particular battle, you win the game and receive instant cash prizes.
					You can also enter into tournaments.
				</p>
			</div>
		</div>
	);
};
