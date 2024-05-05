//IMPORT: PACKAGES
import React from "react";

//IMPORT: ASSESTS
//LOGOS
import { ReactComponent as Hamburger } from "../../../Assets/Icons/hamburger.svg";
import { ReactComponent as Home } from "../../../Assets/Icons/home.svg";
import { ReactComponent as CrewIcon } from "../../../Assets/Icons/user.svg";
import DedalusLogo from "../../../Assets/Logo/dedalus2.png";
//
import HubTile from "../../Components/Molecules/HubTile/HubTile.component";
import Text from "../../Components/Atoms/Text/Text.component";
import {
  BurgerHolders,
  HomeHolders,
  HubContainer,
  Logo,
  MobileIconWrapper,
  NavBar,
  Sidebar,
  TileGrid,
  CrewTextWrapper,
  CrewIconWrapper,
  UserWrapper,
  TitleHolder,
} from "./MainHub.elements";

export default function MainHub() {
  return (
    <>
      <NavBar>
        <TitleHolder>
          <Logo>
            <img
              style={{
                boxSizing: "border-box",
                width: "125px",
                marginLeft: "-0.4rem",
              }}
              src={DedalusLogo}
              alt="Dedalus Logo"
            />
          </Logo>
          <Text isBold={true} color={"darkblue"} type={"h3"}>
            Integrated Care Management
          </Text>
        </TitleHolder>

        <UserWrapper>
          <CrewTextWrapper>
            <Text type={"h3"} color={"darkblue"}>
              John Smith
            </Text>
            <Text style={{marginTop: "-1rem"}} type={"p"} color={"darkblue"}>
              AR_CONSULTANT
            </Text>
          </CrewTextWrapper>
          <CrewIconWrapper>
            <CrewIcon />
          </CrewIconWrapper>
        </UserWrapper>
      </NavBar>
      <HubContainer>
        <HubTile
          //   linkTo=""
          //   icon={<EprIcon />}
          label="Referral Receipt"
        />
        <HubTile
          //   linkTo=""
          //   icon={<EprIcon />}
          label="Register a Patient"
        />
        <HubTile
          //   linkTo=""
          //   icon={<EprIcon />}
          label="Book an Appointment"
        />
        <HubTile
          //   linkTo=""
          //   icon={<EprIcon />}
          label="View Today's Appointments"
        />
        <HubTile
          //   linkTo=""
          //   icon={<EprIcon />}
          label="Care Coordination"
        />
        <HubTile
          //   linkTo=""
          //   icon={<EprIcon />}
          label="Clinical Documentation"
        />
        <HubTile
          //   linkTo=""
          //   icon={<EprIcon />}
          label="Place an Order"
        />
        <HubTile
          //   linkTo=""
          //   icon={<EprIcon />}
          label="View Results"
        />
        <HubTile
          //   linkTo=""
          //   icon={<EprIcon />}
          label="Medication Management"
        />
      </HubContainer>
      <Sidebar>
        <BurgerHolders>
          <Hamburger />
        </BurgerHolders>
        <HomeHolders>
          <Home />
        </HomeHolders>
      </Sidebar>
    </>
  );
}
