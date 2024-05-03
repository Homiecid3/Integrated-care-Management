//IMPORT: PACKAGES
import React from "react";
import { BurgerHolders, HomeHolders, Logo, NavBar, Sidebar } from "./MainHub.elements";

//IMPORT: ASSESTS
import { ReactComponent as Hamburger } from "../../../Assets/Icons/hamburger.svg";
import { ReactComponent as Home } from "../../../Assets/Icons/home.svg";
import DedalusLogo from "../../../Assets/Logo/dedalus2.png";

export default function MainHub() {
  return (
    <>
          <NavBar>
            <Logo>
            <img
              style={{ boxSizing: "border-box", width: "150px" }}
              src={DedalusLogo}
              alt="Dedalus Logo"
            />

            </Logo>
          </NavBar>
      <Sidebar>
        <BurgerHolders>
          <Hamburger />
        </BurgerHolders>
        <HomeHolders className="home">
          <Home />
        </HomeHolders>
      </Sidebar>
    </>
  );
}
