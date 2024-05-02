//IMPORT: PACKAGES
import React from "react";

//IMPORT: ASSETS
import { InputField, SignInHolder } from "./LaunchPage.element";
import Button from "../../Components/Atoms/Button/Button.component";

export default function LaunchPage() {
    return (
        <>
        <SignInHolder>
            <InputField/>
            <InputField/>
            <Button />
        </ SignInHolder>
        </>

    );
}

