//IMPORT: Packages:
import React from "react";
import { StyledButton } from "./Button.element";

export default function Button({
  onClick,
  isQuaternary,
  isActive,
  isDisabled,
  isSecondary,
  type,
  text,
  noBorder,
  width,
  style,
  showBorderOnHover,
  hideButton,
  customFontSize,
}) {
  return (
    <>
      <StyledButton
        isQuaternary={isQuaternary}
        isActive={isActive}
        hideButton={hideButton}
        disabled={isDisabled}
        isSecondary={isSecondary}
        noBorder={noBorder}
        onClick={onClick}
        type={type ? type : "button"}
        width={width}
        style={style}
        showBorderOnHover={showBorderOnHover}
        customFontSize={customFontSize}
      >
      {text ? text : "submit"}
      </StyledButton>
    </>
  );
}