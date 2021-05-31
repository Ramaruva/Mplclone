import { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import { Linker } from "../../routes/Linker";
import { Routes } from "../../routes/Routes";
import { Nav } from "./style";

export const Navbar = () => {
	const { change, handleChange } = useContext(Context);
	return (
		<>
			<Nav>
				<div className="container">
					<div className="imgBox">
						<img src="https://www.mpl.live/static/MPL_Logo.png" alt="img" />
					</div>
					<div id="sidemenu" onClick={handleChange}>
						<div id="menuicon" className={change && `change`}>
							<div className="bar1"></div>
							<div className="bar2"></div>
							<div className="bar3"></div>
						</div>
					</div>
				</div>
			</Nav>
			{change ? <Linker /> : <Routes />}
		</>
	);
};
