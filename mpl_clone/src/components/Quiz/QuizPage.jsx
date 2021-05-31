import React from "react";
import { Link } from "react-router-dom";
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
import { AccordionsTask } from "../Accordions/AccordionsTask";
import { ExperiencePage } from "../Experience/ExperiencePage";
import { TopGames } from "../TopGames/TopGames";
import { GameExp } from "../GameExp";
import Footer from "../../footer/Footer";

export const QuizPage = () => {
	return (
		<div>
			<MiddleBox>
				<picture>
					<source
						srcset="https://www.mpl.live/static/banners/banner_desktop_quiz.webp"
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
							<span>PLAY QUIZ ONLINE ON MPL!</span>
						</div>
						<div className="redheader">
							<span>Increase General Knowledge & Win Real Cash</span>
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
											backgroundColor: "#130230",
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
			<Dark>Play The Quiz Online On MPL!</Dark>
			<Content1>
				<Matter>
					Are GK questions and answers your strength? Do you enjoy all kinds of
					quizzes? If so, then MPL’s online Quiz is perfect for you! Answer
					simple General Knowledge questions in the quiz and win cash and other
					prizes!
				</Matter>
			</Content1>
			<br />
			<br />
			<Content1>
				<Matter>
					MPL lets you play different categories of quizzes online such as
					cricket, maths, current affairs and so on. Just download the MPL
					mobile app, sign up, select the Quiz game from our homepage, and start
					playing quiz online!
				</Matter>
			</Content1>
			<br />
			<br />
			<Content1>
				<Matter>
					Choose from a wide variety of quiz topics on the MPL app, such as math
					quizzes, science quizzes, bollywood quizzes, cricket quizzes and many
					GK-based quizzes! MPL’s Quiz comes in a very simple multiple-choice
					question and answer format. To play, just choose the correct answer
					from the given options, and win money!
				</Matter>
			</Content1>
			<br />
			<br />
			<br />
			<br />

			<Heading>Multiple Quiz Battle formats!</Heading>
			<Content1>
				<Matter>
					You can play the Trivia and General Knowledge Quiz on MPL in multiple
					formats! Play the classic one-on-one battle, where the winner takes
					all the prize money. Just choose a two-player Quiz battle, where you
					and your opponent must answer multiple-choice GK questions within a
					specified duration. The player who gives the maximum correct answers
					in the shortest time span will win the online quiz on MPL!
				</Matter>
			</Content1>
			<Content1>
				<Matter>
					Want to share the fun of playing Quiz with your friends? MPL now lets
					you play multiple player battles where there is more than one winner!
					Yes, you read that right! Play the quiz online against up to four
					other players, where up to three players can win.
				</Matter>
			</Content1>
			<Content1>
				<Matter>
					So, what are you waiting for? Download the MPL app today, play our
					online Quiz by answering simple GK questions, and win money!
				</Matter>
			</Content1>
			<br />
			<br />

			{/* Accordions data */}
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
