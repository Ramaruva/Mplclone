import React from "react";
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
	Withdraw,
	Content3,
	StepsBox,
	StepsImage,
	Symbolcontent,
	SymbolHeading,
	CatgoriesBox,
	Catgories,
	Symbol,
	SybImg,
	CatMatter,
} from "../Styles";
import { RunnerNoAccordionsTask } from "./RunnerNoAccordionsTask";
import { ExperiencePage } from "../Experience/ExperiencePage";
import { TopGames } from "../TopGames/TopGames";
import { GameExp } from "../GameExp";
import Footer from "../../footer/Footer";
import styled from "styled-components";

//CatgoriesBox,Catgories,Symbol,SybImg,CatMatter



export const RunnerNo1Page = () => {
	return (
		<div>
			<MiddleBox>
				<picture>
					<source
						srcset="https://www.mpl.live/static/banners/img_runner_no1_desktop.webp"
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
											backgroundColor: "#0e50a1",
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
			<HeadingFaqs>Runner No.1 Game Online - MPL</HeadingFaqs>
			<Dark>About the Runner No.1 Game</Dark>
			<Content1>
				<Matter>
					Runner No.1 is an endless running 3D video game. In this online game,
					the player controls an explorer being chased by a bear across
					different terrains. The player’s score depends on how long they manage
					to run without colliding with obstacles or falling off cliffs. They
					must also stay ahead of the bear that is chasing them! Gold coins
					collected while running yield Bonus Points.
				</Matter>
			</Content1>
			<br />
			<br />
			<Content1>
				<Matter>
					Runner No. 1 is one of the most popular running adventure games and
					now you can earn real cash by participating in tournaments on MPL.
				</Matter>
			</Content1>
			<br />
			<br />
			<Content1>
				<Matter>
					Run, collect coins, use power-ups, avoid obstacles, keep the hungry
					bear at bay, and try to score as much as you can!
				</Matter>
			</Content1>
			<br />
			<br />
			<br />
			<br />
			<Heading>Features of the Runner No. 1 game</Heading>
			<Content1>
				<Content3>
					At regular intervals, the game alternates between icy and forest
					terrains. Some of the obstacles encountered include ditches, cliffs
					and turns. The speed of the explorer increases with time, making it
					harder for the player to control their character. Power-ups are also
					generated at regular intervals. These include the ‘Rocker’, ‘Magnet’,
					‘Heart’ and ‘Star Speed’, which can help players increase their
					scores.
				</Content3>
			</Content1>
			<br />
			<br />
			<br />
			<Heading>How to Play Runner No. 1 Online With MPL</Heading>
			<Content1>
				<Content>The Basics</Content>
				<Content3>
					Runner No. 1 starts with the player trying to run away from a big
					brown bear. The objective of this MPL game is to keep running as far
					as possible while avoiding any obstacles along the way. You can move
					the player to the left or right by tilting the device accordingly.
					Slide up or down to avoid obstacles. Collect coins for Bonus Points.
				</Content3>
			</Content1>
			<br />
			<br />
			<Content1>
				<Content>Power-ups</Content>
				<Content3>
					You can collect power-ups along the way to increase your score. You
					must jump through a power-up to collect it. A timer around the
					power-up icon indicates how much time is left before the power-up
					vanishes.
				</Content3>
			</Content1>
			<br />
			<br />
			<Heading>These are the 4 different types of power-ups</Heading>
			<CatgoriesBox>
				<Catgories>
					<Symbol>
						<SybImg
							src="https://www.mpl.live/static/2x/runner_no1_magnet.png"
							alt="symbol.png"
						></SybImg>
					</Symbol>
					<CatMatter>
						<SymbolHeading>MAGNET</SymbolHeading>
						<Symbolcontent>
							When activated, all the coins around you will be automatically
							collected.
						</Symbolcontent>
					</CatMatter>
				</Catgories>
				<br />
				<Catgories>
					<Symbol>
						<SybImg
							src="https://www.mpl.live/static/2x/runner_no1_rocket.png"
							alt="symbol.png"
						></SybImg>
					</Symbol>
					<CatMatter>
						<SymbolHeading>ROCKET</SymbolHeading>
						<Symbolcontent>
							When activated, it helps you speed past all obstacles and cover a
							large distance. Please note that you can’t collect coins when this
							power-up is active.
						</Symbolcontent>
					</CatMatter>
				</Catgories>
				<br />
				<Catgories>
					<Symbol>
						<SybImg
							src="https://www.mpl.live/static/2x/runner_no1_star_speed.png"
							alt="symbol.png"
						></SybImg>
					</Symbol>
					<CatMatter>
						<SymbolHeading>STAR SPEED (2X)</SymbolHeading>
						<Symbolcontent>
							When activated, your running speed is increased by 2X.
						</Symbolcontent>
					</CatMatter>
				</Catgories>
				<br />
				<Catgories>
					<Symbol>
						<SybImg
							src="https://www.mpl.live/static/2x/runner_no1_heart.png"
							alt="symbol.png"
						></SybImg>
					</Symbol>
					<CatMatter>
						<SymbolHeading>HEART</SymbolHeading>
						<Symbolcontent>
							When activated, the player will not be affected by any obstacle.
						</Symbolcontent>
					</CatMatter>
				</Catgories>
			</CatgoriesBox>
			<br />
			<br />
			<Content1>
				<Heading>Battling with Online Runner No.1 Players</Heading>
				<Content3>
					To play in a 1-vs-1 battle, go to the battles tab in the MPL app and
					select the Runner No. 1 game. When you start a battle, you’re matched
					against an online opponent. Once the fee has been deducted, the game
					starts, and both the players will start running. The player whose
					score is higher gets the prize money. You can play for cash for higher
					winnings or play in token rooms.
				</Content3>
			</Content1>
			<br />
			<br />
			<Heading>Steps to play</Heading>
			<Content>STEP 1</Content>
			<Content3>Tilt to move left/right</Content3>
			<StepsBox>
				<StepsImage
					src="https://www.mpl.live/static/runner-no1/step_1.png"
					alt="steps.png"
				/>
			</StepsBox>
			<Content>STEP 2</Content>
			<Content3>Swipe up to jump</Content3>
			<StepsBox>
				<StepsImage
					src="https://www.mpl.live/static/runner-no1/step_2.png"
					alt="steps.png"
				/>
			</StepsBox>
			<Content>STEP 3</Content>
			<Content3>Swipe down to slide.</Content3>
			<StepsBox>
				<StepsImage
					src="https://www.mpl.live/static/runner-no1/step_3.png"
					alt="steps.png"
				/>
			</StepsBox>
			<Content>STEP 4</Content>
			<Content3>
				Increase score with powerups like Rocket, Magnet, Heart, Starspeed
			</Content3>
			<StepsBox>
				<StepsImage
					src="https://www.mpl.live/static/runner-no1/step_4.png"
					alt="steps.png"
				/>
			</StepsBox>
			<Content>STEP 5</Content>
			<Content3>Game ends when you die</Content3>
			<StepsBox>
				<StepsImage
					src="https://www.mpl.live/static/runner-no1/step_5.png"
					alt="steps.png"
				/>
			</StepsBox>
			<br />
			<br />
			<br />
			<br />
			<Heading>The Game will End If</Heading>
			<Content2>
				<Ulist>
					<List>You hit any trunk that lies in your way.</List>
					<List>You fall into a pit .</List>
					<List>
						You fall out of the track upon missing any of the twists and turns
					</List>
				</Ulist>
			</Content2>
			<Content1>
				<Matter>
					Download everyone’s favourite adventure running game now and score
					more than your online opponents to earn real cash. Link your online
					payment modes (Tez, Paytm, Bhim UPI) & transfer your winnings
					instantly to your bank account.
				</Matter>
			</Content1>

			<br />
			<br />
			<br />
			<br />
			<br />
			<Heading>Types of Runner No. 1 Game Tournaments</Heading>
			<Content1>
				<Matter>
					The game supports both tournament and battle formats. In the
					tournament format, the objective of the players is to get the best
					high score by the time the tournament ends. You can also play live
					against another online player in a multiplayer - multi-winner battle
					format, where the objective is to last longer than your opponents. The
					game supports playing against up to 4 players at the same time.
				</Matter>
			</Content1>

			<br />
			<br />
			<br />
			<Heading>The Maximum Amount Players can Win</Heading>
			<Content1>
				<Matter>
					On a typical day, there are players who win more than ₹30,000 per day
					in Runner No.1. It is possible for skilled players to win ₹60,000 to
					₹70,000 per day as well.
				</Matter>
			</Content1>

			<br />
			<br />
			<br />

			<HeadingFaqs>MPL Runner No.1 FAQs</HeadingFaqs>
			{/* Accordions data */}
			<RunnerNoAccordionsTask />
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
