//IMPORT: PACKAGES
import React from "react";

//IMPORT: ASSETS
import DedalusLogo from "../../../Assets/Logo/dedalus2.png";
import {
  DedalusLogoContainer,
  InnerFormContainer,
  InputField,
  InputLabelWrapper,
  SignInHolder,
} from "./LaunchPage.element";
import Button from "../../Components/Atoms/Button/Button.component";
import { InputBox } from "../../Components/Atoms/Input/Input.conponent";
import Text from "../../Components/Atoms/Text/Text.component";
import { StyledH1 } from "../../Components/Atoms/Text/Text.elements";
import { useNavigate } from "react-router";

export default function LaunchPage() {
  const Navigate = useNavigate();

  return (
    <>
      <SignInHolder>
        <InnerFormContainer>
          <DedalusLogoContainer>
            <img
              style={{ boxSizing: "border-box", width: "150px" }}
              src={DedalusLogo}
              alt="Dedalus Logo"
            />
          </DedalusLogoContainer>
          <StyledH1 isBold={true}>Integrate Care Management</StyledH1>
          <InputBox labelText={"Username"} />
          <InputBox labelText={"Password"} />
          <Button
            text={"Login"}
            to="/mainhub"
            onClick={() => {
              Navigate("/mainhub");
            }}
          />
        </InnerFormContainer>
      </SignInHolder>
    </>
  );
}
