//IMPORT: PACKAGES
import React from "react";

//IMPORT: ASSETS
import DedalusLogo from '../../assets/img/dedalus_logo.png';
import {
  InputField,
  InputLabelWrapper,
  SignInHolder,
} from "./LaunchPage.element";
import Button from "../../Components/Atoms/Button/Button.component";
import { InputBox } from "../../Components/Atoms/Input/Input.conponent";

export default function LaunchPage() {
  return (
    <>
      <SignInHolder>
        <DedalusLogo />
        <InputBox labelText={"Username"} />
        <InputBox labelText={"Password"} />
        <Button />
      </SignInHolder>
    </>
  );
}
