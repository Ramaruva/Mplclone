import React from "react";

import {
	Experience,
	ExpBoxs,
	Expimagebox,
	ExpImage,
	HeadingFaqs,
	Content,
	Content3,
} from "../Styles";

export const ExperiencePage = () => {
	return (
		<div>
			
			<Experience>
				<ExpBoxs>
					<Expimagebox>
						<ExpImage
							src="https://www.mpl.live/static/trust-icons/trust-1.png"
							alt="logo.png"
						></ExpImage>
						<Content>4 Crore +</Content>
						<Content3>Users</Content3>
					</Expimagebox>
				</ExpBoxs>
				<ExpBoxs>
					<Expimagebox>
						<ExpImage
							src="https://www.mpl.live/static/trust-icons/trust-2.png"
							alt="logo.png"
						></ExpImage>
						<Content>100% Secure</Content>
						<Content3>& Legal</Content3>
					</Expimagebox>
				</ExpBoxs>
				<ExpBoxs>
					<Expimagebox>
						<ExpImage
							src="https://www.mpl.live/static/trust-icons/trust-3.png"
							alt="logo.png"
						></ExpImage>
						<Content>24x7</Content>
						<Content3>Customer Support</Content3>
					</Expimagebox>
				</ExpBoxs>
				<ExpBoxs>
					<Expimagebox>
						<ExpImage
							src="https://www.mpl.live/static/trust-icons/trust-4.png"
							alt="logo.png"
						></ExpImage>
						<Content>Cashback</Content>
						<Content3>Offers</Content3>
					</Expimagebox>
				</ExpBoxs>
			</Experience>
		</div>
	);
};
