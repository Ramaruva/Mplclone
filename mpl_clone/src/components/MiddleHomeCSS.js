import styled from "styled-components";
const Middlebox = styled.div`
	width: 700px;
	height: 350px;
	/* border: 1px solid grey; */
	background-color: #06011c;
	margin: auto;
	border-radius: 10px;
	@media screen and (max-width: 600px) {
		width: 450px;
		height: 200px;
	}
`;
const VipImages = styled.img`
	width: 100%;
	height: 100%;
`;
//rgb(255, 255, 255)
const ImageContent = styled.div`
	width: 350px;
	height: 200px;
	margin-top: -300px;
	margin-left: 50px;
	/* border: 1px solid grey; */
	@media screen and (max-width: 600px) {
		margin-top: -250px;
		width: 250px;
		height: 100px;
		font-size: small;
	}
`;
const Become = styled.p`
	font-size: 16px;

	color: rgb(255, 255, 255);
	font-weight: 600;
	height: 19px;
	line-height: 19px;
	margin-block-end: 0px;
	margin-block-start: 0px;
	margin-bottom: 0px;
	margin-inline-end: 0px;
	margin-inline-start: 0px;
	margin-left: 0px;
	margin-right: 0px;
	margin-top: 0px;
	text-align: left;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;
const Mplvip = styled.p`
	color: #fff200;
	font-size: 30px;
	text-align: left;
	font-weight: 1000;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;
const Getbutton = styled.button`
	background-color: rgb(51, 255, 102);
	color: rgb(35, 0, 70);
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	justify-content: left;
	font-size: 20px;
	font-weight: 700;
	height: 30px;
	width: 150px;
	margin-top: 20px;
	margin-left: -200px;
	border-radius: 5px;
	border: 0px;
	outline: none;
`;
const Indian = styled.h1`
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif -apple-system, BlinkMacSys;

	font-size: 34px;
	font-weight: 600;

	margin-top: 56px;
	text-align: center;
	text-transform: uppercase;
	@media screen and (max-width: 600px) {
		font-size: 25;
		text-align: center;
	}
`;
const WinnersBox = styled.div`
	display: grid;
	margin-left: 60px;
	grid-template-columns: 400px 400px 400px;
	@media screen and (max-width: 600px) {
		grid-template-columns: 400px;
	}
`;
const Wbox = styled.div`
	height: 520px;
	min-width: 244px;
	margin: 20px;
	/* border: 1px solid grey; */
	background-color: rgb(245, 230, 249);
	border-radius: 30px;
`;
const Imgbox = styled.div`
	width: 200px;
	height: 200px;
	margin: 10px auto;
	border-radius: 50%;
	/* border: 1px solid grey; */
`;
const Img = styled.img`
	width: 100%;
	height: 100%;
`;
const Name = styled.h3`
	font-family: "Heebo", sans-serif;

	font-style: normal;
	font-weight: 800;
	font-size: 25px;
	line-height: 19px;
	text-align: center;
	text-transform: uppercase;
	color: #9c00c3;
`;
const Subname = styled.h3`
	font-family: "Heebo", sans-serif;

	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 16px;
	color: rgba(25, 10, 40, 0.6);
	margin: 0 0 12px 0;
`;
const Amount = styled.h2`
	font-family: "Heebo", sans-serif;

	font-style: normal;
	font-size: 28px;
	line-height: 34px;
	text-align: center;
	text-transform: uppercase;
	color: #e91051;
	font-weight: 1300px;
`;

const WinnerContent = styled.p`
	font-family: Trim-Regular;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 20px;
	text-align: center;
	color: rgba(25, 10, 40, 0.6);
`;

const LinoBox = styled.div`
	box-sizing: border-box;
	display: block;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
	font-size: 19.9375px;
	height: 340px;
	margin-bottom: 0px;
	margin-left: 16px;
	margin-right: 16px;
	margin-top: 0px;
	padding-bottom: 24px;
	padding-left: 0px;
	background-color: #1a0a3f;
	padding-right: 0px;
	padding-top: 24px;
	width: 1300px;
	@media screen and (max-width: 600px) {
		height: fit-content;
		width: fit-content;
	}
`;
const Sponser = styled.h1`
	margin-top: -10px;
	color: rgb(255, 255, 255);
	font-family: Trim-SemiBold;
	display: block;
`;

const LionImgbox = styled.div`
	width: 600px;
	height: 230px;
	margin: auto;
	/* border: 1px solid white; */
`;
const LionImg1 = styled.div`
	width: 280px;
	height: 100%;
	margin: auto;
	border: 1px solid white;
	float: left;
`;
const LionImg2 = styled.div`
	width: 280px;
	height: 100%;
	margin: auto;
	float: right;

	border: 1px solid white;
`;
const LionImage = styled.img`
	height: 100%;
	width: 100%;
`;
const Gameexp = styled.h2`
	color: rgb(35, 0, 70);
	font-family: Trim-SemiBold;
	font-size: 45px;
	@media screen and (max-width: 600px) {
		font-size: 25px;
		text-align: center;
	}
`;

const IplMembox = styled.div`
	display: grid;
	grid-template-columns: 230px 230px 230px 230px;
	@media screen and (max-width: 900px) {
		grid-template-columns: 230px 230px;
	}
	@media screen and (max-width: 600px) {
		grid-template-columns: 230px 230px;
	}
	@media screen and (max-width: 400px) {
		grid-template-columns: 230px;
	}
`;
const Iplboxes = styled.div`
	width: 200px;
	height: 125px;
	margin: auto 250px;
	border-radius: 7px;
	/* border: 1px solid grey; */
`;
const Iplimg = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 7px;
`;

export {
	Middlebox,
	VipImages,
	ImageContent,
	Become,
	Mplvip,
	WinnersBox,
	Getbutton,
	Imgbox,
	Wbox,
	Indian,
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
	Iplimg
};
