import { useState } from "react";
import { Linker } from "../../routes/Linker";
import { Middle1 } from "../Middle1";
import { Nav } from "./style";

export const Navbar = () => {
  const [change ,setChange]=useState(false);
  return (
    <>
      <Nav>
        <div className="container">
          <div className="imgBox">
            <img src="https://www.mpl.live/static/MPL_Logo.png" alt="img" />
          </div>
          <div id="sidemenu" onClick={()=>setChange(!change)}>
            <div id="menuicon" className={change&&`change`}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>
      </Nav>
      {
        change?<Linker/>: <Middle1 />
      }
     
    </>
  );
};
