import styled from "styled-components";

const Heading = styled.h1`
	text-align: center;
	display: block;
	font-family: Roboto, sans-serif;
	line-height: 18px;
	font-size: 30px;
	font-weight: 700;
	font-style: normal;
	@media screen and (max-width: 900px) {
		font-size: 22px;
		text-align: center;
	}
	@media screen and (max-width: 600px) {
		font-size: 18px;
		text-align: center;
	}
`;
const HeadingFaqs = styled.h1`
	text-align: center;
	display: block;
	font-family: Roboto, sans-serif;
	line-height: 18px;
	font-size: 38px;
	color: rgb(34, 34, 34);
	font-weight: 700;
	font-style: normal;
	@media screen and (max-width: 900px) {
		font-size: 22px;
		text-align: center;
	}
	@media screen and (max-width: 600px) {
		font-size: 18px;
		text-align: center;
	}
`;

const Dark = styled.h1`
	text-align: center;
	display: block;
	font-family: Roboto, sans-serif;
	line-height: 18px;
	margin-top: 140px;
	font-size: 38px;
	font-weight: 700;
	font-style: normal;
	@media screen and (max-width: 600px) {
		font-size: 25px;
		font-weight: 700;
	}
`;
const Content1 = styled.div`
	display: inline-block;
	margin: 20px auto;
	width: 1200px;
	/* border: 1px solid grey; */
	@media screen and (max-width: 1000px) {
		width: fit-content;
	}
	@media screen and (max-width: 600px) {
		width: fit-content;
	}

	@media screen and (max-width: 400px) {
		width: fit-content;
	}
`;
const Matter = styled.h3`
	text-align: center;
	height: fit-content;
	width: fit-content;
	color: rgb(130, 130, 130);
	font-family: Roboto, sans-serif;
	font-weight: 300;
	margin-top: 5px;
	font-size: 20px;
	line-height: 30px;

	@media screen and (max-width: 600px) {
		font-size: 20px;
		font-family: Roboto, sans-serif;
		font-weight: 300;
	}

	@media screen and (max-width: 400px) {
		font-size: 20px;
		font-family: Roboto, sans-serif;
		font-weight: 300;
	}
`;

const Content2 = styled.div`
	width: fit-content;
	margin-left: 50px;
	height: fit-content;
	/* border: 1px solid grey; */
`;
const List = styled.li`
	color: rgb(130, 130, 130);
	font-family: Roboto, sans-serif;
	text-align: center;
	font-weight: 100;
	font-size: 20px;
	text-align: left;
	line-height: 30px;
	font-style: normal;
`;
const Ulist = styled.ul`
	margin: 0px;
`;
const Content = styled.h3`
	color: rgb(139, 131, 131);
	font-family: Roboto, sans-serif;
	text-align: center;
	font-weight: 700;
	display: block;
	font-size: 20px;
	font-style: normal;
`;
const Content3 = styled.h3`
	color: rgb(130, 130, 130);
	font-family: Roboto, sans-serif;
	text-align: center;
	font-weight: 100;
	display: block;
	font-size: 20px;
	font-style: normal;
`;

//experinece page css
const Experience = styled.div`
	display: grid;
	margin-left: 250px;

	grid-template-columns: 200px 200px 200px 200px;
	@media screen and (max-width: 900px) {
		grid-template-columns: 300px 300px;
	}

	@media screen and (max-width: 600px) {
		grid-template-columns: 300px 300px;
		margin-left: -40px;
	}
	@media screen and (max-width: 550px) {
		grid-template-columns: 300px;
	}
`;
const ExpBoxs = styled.div`
	width: 170px;
	height: 230px;
	margin: 10px auto;
	/* border: 1px solid grey; */
`;

const Expimagebox = styled.div`
	width: 100px;
	height: 100px;
	margin: 10px auto;
	/* border: 1px solid grey; */
`;
const ExpImage = styled.img`
	width: 100%;
	height: 100%;
`;
//steps page css

const StepsBox = styled.div`
	width: 600px;
	height: 300px;
	border-radius: 5px;
	margin: auto;
	/* border: 1px solid grey; */
	@media screen and (max-width: 600px) {
		width: 400px;
		height: 200px;
	}
	@media screen and (max-width: 400px) {
		width: 300px;
		height: 150px;
	}
`;

const StepsImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 5px;
`;


//top games css
const DisplayImage = styled.div`
	display: grid;
	grid-template-columns: 300px 300px 300px 300px;
	@media screen and (max-width: 900px) {
		grid-template-columns: 300px 300px;
	}

	@media screen and (max-width: 600px) {
		grid-template-columns: 300px 300px;
		margin-left: -40px;
	}
	@media screen and (max-width: 550px) {
		grid-template-columns: 300px;
	}
`;

const DivBox = styled.div`
	border-radius: 4px;
	/* border: 1px solid grey; */
	width: 240px;
	cursor: pointer;
	float: left;
	height: 130px;
	margin: 10px 100px;
`;

const New = styled.div`
	/* width: 150px; */
	font-family: Roboto, sans-serif;
	background: #ffe500;
	font-size: 15px;
	line-height: 13px;
	font-weight: bold;
	border-radius: 20px;
	height: 15px;
	width: 50px;
`;
const TopImages = styled.img`
	border-radius: 4px;
	height: 80px;
	width: 80px;
`;
const ImageContent = styled.h3`
	color: rgb(74, 74, 74);
	font-family: Roboto, sans-serif;
	font-weight: 300;
	margin-top: 5px;
	text-align: left;
	font-style: normal;
`;
const ImgBox = styled.div`
	width: 80px;
	height: 80px;
	/* border: 1px solid grey; */
	float: left;
`;
const Box = styled.div`
	height: 80px;
	float: right;
	width: 150px;

	/* border: 1px solid grey; */
`;
export {
	DisplayImage,
	DivBox,
	New,
	TopImages,
	ImageContent,
	ImgBox,
	Box,
	StepsBox,
	StepsImage,
	Experience,
	ExpBoxs,
	Expimagebox,
	ExpImage,
	HeadingFaqs,
	Heading,
	Content,
	Dark,
	Content1,
	Content2,
	Content3,
	Matter,
	List,
	Ulist,
};
