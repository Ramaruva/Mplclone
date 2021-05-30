import React from "react";
import styled from "styled-components";
import { ExperiencePage } from "./Experience/ExperiencePage";
import { TopGames } from "./TopGames/TopGames";
import {
	Middlebox,
	VipImages,
	ImageContent,
	Become,
	Mplvip,
	Getbutton,
	Indian,
	Imgbox,
	WinnersBox,
	Wbox,
	Img,
	Name,
	Subname,
	Amount,
	WinnerContent,
	LinoBox,
	Sponser,
	LionImgbox,
	LionImg1,
	LionImg2,
	Gameexp,
	LionImage,
	IplMembox,
	Iplboxes,
	Iplimg,
} from "./MiddleHomeCSS";


export const MiddleHome = () => {
	return (
		<div>
			<TopGames />
			<Middlebox>
				<VipImages
					src="https://www.mpl.live/static/banners/desktop_widget_vip.png"
					alt="vip.png"
				/>
				<ImageContent>
					<Become>BECOME A</Become>
					<Mplvip>MPL VIP</Mplvip>
					<Become>GET 2% EXTRA WINNIGS!</Become>
					<Getbutton>GET IT NOW</Getbutton>
				</ImageContent>
			</Middlebox>
			<Indian>Trusted By 6 Crore+ Indians</Indian>
			<WinnersBox>
				<Wbox>
					<Imgbox>
						<Img
							src="https://www.mpl.live/static/banners/user_epicenter-satish.png"
							alt="winner.png"
						/>
					</Imgbox>
					<Name>SATISH KUMAR</Name>
					<Subname>Faridabad, Haryana</Subname>
					<Amount>WON ₹11 LAKH!</Amount>
					<WinnerContent>
						MPL is like a lucky bank balance for me. It gave a once in a
						lifetime opportunity to meet Virat Kohli. The platform lets me earn
						money using my expertise and rich knowledge in Cricket and other
						sports.
					</WinnerContent>
				</Wbox>
				<Wbox>
					<Imgbox>
						<Img
							src="https://www.mpl.live/static/banners/user_epicenter.png"
							alt="winner.png"
						/>
					</Imgbox>
					<Name>KULDEEP TOMAR</Name>
					<Subname>Baghpat, UP</Subname>
					<Amount>WON ₹63 LAKH</Amount>
					<WinnerContent>
						My friend told me about MPL. It has lots of games. I started playing
						Fruit Chop and rummy. Within a year I won Four lakh while having fun
						playing games. MPL helped me, solve my financial problems. I paid
						for my kid's school fees. Recently I also bought an iPhone to play
						on MPL.
					</WinnerContent>
				</Wbox>
				<Wbox>
					<Imgbox>
						<Img
							src="https://www.mpl.live/static/banners/user_epicenter-akash.png"
							alt="winner.png"
						/>
					</Imgbox>
					<Name>AKASH SAITAB</Name>
					<Subname>Darbangha, Bihar</Subname>
					<Amount>WON ₹35 LAKH</Amount>
					<WinnerContent>
						MPL has a great collection of fun games that gives you a chance to
						earn money as well. I've won around ₹8 Lakh playing Fruit Dart,
						Runner and various other games.
					</WinnerContent>
				</Wbox>
			</WinnersBox>
			<LinoBox>
				<Sponser>Proud Sponsor Of</Sponser>
				<LionImgbox>
					<LionImg1>
						<LionImage
							src="https://www.mpl.live/static/sponsors/rcb_logo.png"
							alt="logo.png"
						></LionImage>
					</LionImg1>
					<LionImg2>
						<LionImage
							src="https://www.mpl.live/static/sponsors/kkr_logo.png"
							alt="logo.png"
						></LionImage>
					</LionImg2>
				</LionImgbox>
			</LinoBox>
			<Gameexp>Best-In-Class Gaming Experience</Gameexp>
			<ExperiencePage />
			<br />
			<br />
			<br />
			<Gameexp>MPL Is A Member Of</Gameexp>
			<IplMembox>
				<Iplboxes>
					<Iplimg
						src="https://www.mpl.live/static/trust-icons/aigf.png"
						alt="logo.png"
					/>
				</Iplboxes>
				<Iplboxes>
					<Iplimg
						src="https://www.mpl.live/static/trust-icons/ficci.png"
						alt="ficc.png"
					/>
				</Iplboxes>
				<Iplboxes>
					<Iplimg
						src="https://www.mpl.live/static/trust-icons/trf.png"
						alt="trf.png"
					/>
				</Iplboxes>
				<Iplboxes>
					<Iplimg
						src="https://www.mpl.live/static/trust-icons/IAMAI.png"
						alt="iamal.png"
					/>
				</Iplboxes>
			</IplMembox>
		</div>
	);
};
