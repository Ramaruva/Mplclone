import React from "react";
import styled from "styled-components";
import {
	DisplayImage,
	DivBox,
	New,
	TopImages,
	ImageContent,
	ImgBox,
	Box,
} from "../Styles";

export const TopGames = () => {
	return (
		<div>
			<DisplayImage>
				<DivBox>
					<ImgBox>
						<TopImages
							src="https://www.mpl.live/cledge.mpl.live/pb/website/static/e4ac987fa573429fbd0d77c97a1231db.png"
							alt="logo.png"
						/>
					</ImgBox>
					<Box>
						<ImageContent>Fruits Dark</ImageContent>
						<New>New</New>
					</Box>
				</DivBox>
				<DivBox>
					<ImgBox>
						<TopImages
							src="https://www.mpl.live/static/landing-page-images/Game_WCC@2x.png"
							alt="logo.png"
						/>
					</ImgBox>
					<Box>
						<ImageContent>Play WCC </ImageContent>
						<New>New</New>
					</Box>
				</DivBox>
				<DivBox>
					<ImgBox>
						<TopImages
							src="https://www.mpl.live/static/landing-page-images/Game_Pool@2x.png"
							alt="logo.png"
						/>
					</ImgBox>
					<Box>
						<ImageContent>Pool</ImageContent>
					</Box>
				</DivBox>
				<DivBox>
					<ImgBox>
						<TopImages
							src="https://www.mpl.live/static/landing-page-images/Game_Speed_Chess@2x.png"
							alt="logo.png"
						/>
					</ImgBox>
					<Box>
						<ImageContent>Chess</ImageContent>
					</Box>
				</DivBox>
			</DisplayImage>

			<br />
			<DisplayImage>
				<DivBox>
					<ImgBox>
						<TopImages
							src="https://www.mpl.live/static/landing-page-images/Game_Fantasy_Cricket@2x.png"
							alt="logo.png"
						/>
					</ImgBox>
					<Box>
						<ImageContent>Fantasy Cricket</ImageContent>
					</Box>
				</DivBox>
				<DivBox>
					<ImgBox>
						<TopImages
							src="https://www.mpl.live/static/landing-page-images/Game_Quiz@2x.png"
							alt="logo.png"
						/>
					</ImgBox>
					<Box>
						<ImageContent>Quiz</ImageContent>
					</Box>
				</DivBox>
				<DivBox>
					<ImgBox>
						<TopImages
							src="https://www.mpl.live/static/landing-page-images/Game_Fruit_Chop@2x.png"
							alt="logo.png"
						/>
					</ImgBox>
					<Box>
						<ImageContent>Fruit Chop</ImageContent>
					</Box>
				</DivBox>
				<DivBox>
					<ImgBox>
						<TopImages
							src="https://www.mpl.live/static/landing-page-images/Game_Runner_No1@2x.png"
							alt="logo.png"
						/>
					</ImgBox>
					<Box>
						<ImageContent>RunnerNo.1</ImageContent>
					</Box>
				</DivBox>
			</DisplayImage>
		</div>
	);
};
