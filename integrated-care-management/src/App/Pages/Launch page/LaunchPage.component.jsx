//IMPORT: PACKAGES
import React from "react";

//IMPORT: ASSETS
import DedalusLogo from "../../../Assets/Logo/dedalus2.png";
import {
  ButtonContainer,
  DedalusLogoContainer,
  InnerFormContainer,
  InputField,
  InputLabelWrapper,
  SignInHolder,
} from "./LaunchPage.element";
import Button from "../../Components/Atoms/Button/Button.component";
import { InputBox } from "../../Components/Atoms/Input/Input.conponent";
import { useNavigate } from "react-router";
import Text from "../../Components/Atoms/Text/Text.component";

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
          <Text style={{ fontWeight: "900", width: "25rem", marginLeft: "-1rem" }} isBold={true} color={"#103157"} type={"h2"}>Integrated Care Management</Text>
          <InputBox labelText={"Username"} />
          <InputBox type={"password"} labelText={"Password"} />
          <ButtonContainer>
          <Button
            text={"Login"}
            to="/mainhub"
            onClick={() => {
              Navigate("/mainhub");
            }}
          />
          </ButtonContainer>
        </InnerFormContainer>
      </SignInHolder>
    </>
  );
}
