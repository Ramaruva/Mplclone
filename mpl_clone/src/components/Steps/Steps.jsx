import React from "react";
import {
	Heading,
	Content,
	Content3,
	Content1,
	Matter,
	StepsBox,
	StepsImage,
} from "../Styles";

export const Steps = () => {
	return (
		<div>
			<Heading>Steps to Play Fruit Dart</Heading>
			<Content1>
				<Matter>
					Can’t wait to play Fruit Dart online? Once you have understood the
					Fruit Dart rules, you can play this amazing game on MPL with these
					easy steps:
				</Matter>
			</Content1>
			<Content>STEP 1</Content>
			<Content3>
				Tap anywhere on the screen to release the knife and slice fruits.
			</Content3>
			<StepsBox>
				<StepsImage
					src="https://www.mpl.live/static/fruit-dart/step-1.png"
					alt="steps.png"
				/>
			</StepsBox>
			<Content>STEP 2</Content>
			<Content3>
				Slice multiple fruits with one knife for bonus points.
			</Content3>
			<StepsBox>
				<StepsImage
					src="https://www.mpl.live/static/fruit-dart/step-2.png"
					alt="steps.png"
				/>
			</StepsBox>
			<Content>STEP 3</Content>
			<Content3>Hit the power-ups to increase your score.</Content3>
			<StepsBox>
				<StepsImage
					src="https://www.mpl.live/static/fruit-dart/step-3.png"
					alt="steps.png"
				/>
			</StepsBox>
			<Content>STEP 4</Content>
			<Content3>
				Missing fruits won’t end your game; hitting bombs will. Avoid hitting
				bombs, or you will lose the game.
			</Content3>
			<StepsBox>
				<StepsImage
					src="https://www.mpl.live/static/fruit-dart/step-4.png"
					alt="steps.png"
				/>
			</StepsBox>
			<Content>STEP 5</Content>
			<Content3>
				Slice as many fruits as possible with the 3-minute timer.
			</Content3>
			<StepsBox>
				<StepsImage
					src="https://www.mpl.live/static/fruit-dart/step-5.png"
					alt="steps.png"
				/>
			</StepsBox>
		</div>
	);
};
