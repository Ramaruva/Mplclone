import React from "react";
import { Link } from "react-router-dom";
import { FruitchopAccordionsTask } from "./FruitchopAccordionsTask";
import {
	Heading,
	HeadingFaqs,
	Dark,
	Content1,
	Content2,
	Matter,
	List,
	Ulist,
	Content,
	MiddleBox,
	Paytmbox,
	Shopnow,
	Withdraw,
	Content3,
	StepsBox,
	StepsImage,
} from "../Styles";
import { ExperiencePage } from "../Experience/ExperiencePage";
import { TopGames } from "../TopGames/TopGames";
import { GameExp } from "../GameExp";
import Footer from "../../footer/Footer";

export const FruitChopPage = () => {
	return (
		<div>
			<MiddleBox>
				<picture>
					<source
						srcset="https://www.mpl.live/static/banners/fruit_chop_desktop.webp"
						type="image/webp"
					/>
					<source
						srcset="https://www.mpl.live/cledge.mpl.live/pb/website/static/dd403537ac524fa4a64317c99562f103.webp"
						type="image/png"
					/>
					<img
						src="https://www.mpl.live/cledge.mpl.live/pb/website/static/dd403537ac524fa4a64317c99562f103.webp"
						alt="banner"
						className="bannerimg"
					/>
				</picture>
				<div className="bannertext">
					<div className="bannertextcontainer">
						<div className="greyheader">
							<span>PLAY FRUIT CHOP ON MPL</span>
						</div>
						<div className="redheader">
							<span>Win Real Money with Fruit Chopping</span>
						</div>
					</div>
				</div>
				<div className="bannersmscontainer">
					<div>
						<div className="smsblock">
							<form className="smsformbox">
								<div>
									<input
										style={{
											backgroundColor: "#2e2008",
											width: "300px",
											height: "50px",
											marginTop: "10px",
											marginRight: "10px",
											border: "1px solid whitesmoke",
											borderRadius: "4px",
										}}
										type="text"
										name="mobile"
										placeholder="Enter Phone Number"
										minLength="10"
										maxLength="10"
									/>
								</div>
								<div className="getsms" style={{ color: "white" }}>
									<input type="submit" value="Get SMS With Download Link" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</MiddleBox>
			<Withdraw>
				<h2 className="h2winnings">Withdraw Winnings With</h2>
			</Withdraw>
			<Paytmbox>
				<div className="paybox">
					<div className="payments">
						<div className="paymentsection">
							<div className="imgblock">
								<div className="datablock">
									<img
										src="https://www.mpl.live/static/withdraw/new-icons/paytm.png"
										alt=""
										className="datablockimg"
									/>
									<p className="pbox">Paytm Wallet</p>
								</div>
							</div>
							<div className="imgblock">
								<div className="datablock">
									<img
										src="https://www.mpl.live/static/withdraw/new-icons/upi.png"
										alt=""
										className="datablockimg"
									/>
									<p className="pbox">UPI</p>
								</div>
							</div>
							<div className="imgblock">
								<div className="datablock">
									<img
										src="https://www.mpl.live/static/withdraw/new-icons/amazon_pay.png"
										alt=""
										className="datablockimg"
									/>
									<p className="pbox">Amazon Pay</p>
								</div>
							</div>
							<div className="imgblock">
								<div className="datablock">
									<img
										src="https://www.mpl.live/static/withdraw/new-icons/bank_transfer.png"
										alt=""
										className="datablockimg"
									/>
									<p className="pbox">Bank Transfer</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Paytmbox>

			{/* Topgames component */}
			<TopGames />
			<HeadingFaqs>Fruit Chop Game Online - MPL</HeadingFaqs>
			<Dark>About the Fruit Chop Game</Dark>
			<Content1>
				<Matter>
					In Fruit Chop the player slices fruit with a blade controlled via the
					touch screen. As the fruit appears on the screen, the player has to
					swipe their finger across the screen to replicate a slicing motion and
					attempt to slice the fruit in half. Extra points are awarded for
					slicing multiple fruits with one swipe. Players must slice all fruit;
					if three fruits are missed, the game ends. Bombs occasionally appear
					on the screen, and the game ends if the player slices them.
				</Matter>
			</Content1>
			<br />
			<br />
			<Content1>
				<Matter>
					Fruit chop is one of the most popular and addictive games in the
					history of arcade gaming. It is a fruit swipe style arcade game in
					which you swipe on your screen to cut colourful bouncing fruits while
					avoiding occasional bombs. The higher you score, the better your
					chances of winning the game. Make combos of 2 or more fruits to earn
					more points. Mobile Premier League gives you a platform to play the
					Fruit Chop game online and earn real cash. It’s time to be a ninja!
				</Matter>
			</Content1>
			<br />
			<br />
			<Content1>
				<Matter>
					One of the most played games on the MPL app - Fruit Chop is also
					available in 1 vs 1 battle mode. No one will ever fill your pockets
					with cash for chopping fruits, but MPL does!
				</Matter>
			</Content1>
			<br />
			<br />
			<br />
			<br />
			<Heading>Features of the Fruit Chop game</Heading>
			<Content1>
				<Content3>
					Players must slice fruits to score points, and they earn bonus points
					for slicing multiple fruits in one go.
				</Content3>
			</Content1>
			<br />
			<br />
			<br />
			<Heading>Steps to play</Heading>
			<Content>STEP 1</Content>
			<Content3>Swipe to Chop Fruits</Content3>
			<StepsBox>
				<StepsImage
					src="https://www.mpl.live/static/fruit-chop/step_1.png"
					alt="steps.png"
				/>
			</StepsBox>
			<Content>STEP 2</Content>
			<Content3>You will lose a life if you miss a fruit</Content3>
			<StepsBox>
				<StepsImage
					src="https://www.mpl.live/static/fruit-chop/step_2.png"
					alt="steps.png"
				/>
			</StepsBox>
			<Content>STEP 3</Content>
			<Content3>Chop fruits together to increase your high score .</Content3>
			<StepsBox>
				<StepsImage
					src="https://www.mpl.live/static/fruit-chop/step_3.png"
					alt="steps.png"
				/>
			</StepsBox>
			<Content>STEP 4</Content>
			<Content3>Game will end if you hit a bomb or lose all lives</Content3>
			<StepsBox>
				<StepsImage
					src="https://www.mpl.live/static/fruit-chop/step_4.png"
					alt="steps.png"
				/>
			</StepsBox>

			<br />
			<br />
			<br />
			<Heading>How to Play Fruit Chop Game Online With MPL?</Heading>
			<br />
			<br />
			<Content>What do you need to do?</Content>
			<Content1>
				<Matter>
					Show off your quick reaction skills by slicing fruits that pop up from
					the bottom of the screen. Although each fruit gives you the same
					number of points, you can earn bonus points if you chop multiple
					fruits with a single swipe. The game doesn’t come with a timer. This
					means that you can play Fruit Chop for hours and go on scoring points!
					Your objective is to score more than the competition.
				</Matter>
			</Content1>
			<Content1>
				<Matter>
					If you want to win bigger cash prizes, you can join bigger
					tournaments. Once you join a tournament, you can play as many times as
					you want until the tournament ends. However, only your highest score
					will be counted for the leaderboard. Players will be rewarded based on
					their final rankings once the tournament ends.
				</Matter>
			</Content1>
			<br />
			<br />

			<Content>Fruit Chop Game Play</Content>
			<Content2>
				<Ulist>
					<List>
						Enter the game and you will see delicious fruits popping up from the
						bottom of the screen..
					</List>
					<List>Swipe and cut fruits to earn points..</List>
					<List>
						Slicing multiple fruits with a single swipe will add bonus points to
						your score
					</List>
				</Ulist>
			</Content2>
			<Content>The Game will End If</Content>
			<Content2>
				<Ulist>
					<List>You fail to chop 3 consecutive fruits</List>
					<List>You slice a bomb</List>
					<List>You strike under your striker line.</List>
				</Ulist>
			</Content2>
			<br />
			<br />
			<br />
			<Heading>Types of Fruit Chop Tournaments</Heading>
			<Content1>
				<Matter>
					The game supports both tournament and battle formats. In the
					tournament format, the objective of the players is to get the best
					high score by the time the tournament ends. You can also play live
					against another online player in one versus one battle format or in a
					multiplayer - multi winner battle format, and the objective is to
					score higher than your opponents. The game supports playing against up
					to 4 players at the same time.
				</Matter>
			</Content1>
			<br />
			<br />
			<Heading>The Maximum Amount Players can Win</Heading>
			<Content1>
				<Matter>
					On a typical day, there are players who win more than ₹1 lakh per day
					in Fruit Chop. It is also possible for skilled players to win more
					than ₹1.5 lakhs or ₹1.75 lakhs per day!
				</Matter>
			</Content1>

			<br />
			<br />
			<br />
			<Heading>Why play Fruit Dart on MPL?</Heading>
			<Content1>
				<Matter>
					Fruit Dart is one of the most addictive arcade games on the MPL app,
					besides Fruit Slice. The game doesn’t require many skills or tactics.
					The game is pretty straightforward yet offers a thrilling experience.
					Apart from the usual slicing fruits and staying away from the bombs,
					the game also features impressive power-ups to boost your score with
					bonus points. Here’s why you must try Fruit Dart on MPL:
				</Matter>
			</Content1>

			<br />
			<br />
			<br />

			<HeadingFaqs>MPL Fruit Chop FAQs</HeadingFaqs>
			{/* Accordions data */}
			<FruitchopAccordionsTask />
			<br />
			<br />
			<br />
			{/* Experinece page  */}
			<HeadingFaqs>Get a Great Experience on MPL</HeadingFaqs>
			<ExperiencePage />
			<br />
			<br />
			<br />
			<GameExp />
			<Footer />
		</div>
	);
};
