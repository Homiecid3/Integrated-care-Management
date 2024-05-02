///IMPORT : Packages
import styled from "styled-components"

//Element: StyledButton
export const StyledButton = styled.button`
  box-sizing: border-box;
  align-item: center;
  padding: 0.5px 0.5rem;
  min-height: 35px;
  height: 35px;
  max-width: 100%
  width: ${({width}) => (width ? width : "auto")};

  color: ${({ isSecondary, isQuaternary, isActive }) => 
  isSecondary ? "#215195"  : isQuaternary && isActive ? "#215195" : "#ffff"};

  background-color: ${({isSecondary, isTertiary, isQuaternary, isActive }) => 
  isSecondary
  ? "#fff"
  : isTertiary || isActive
  ? "#A4D4B4" : "#215195"};

  border-radius: ${({ isQuaternary }) => (isQuaternary ? "15px" : "4px")};
  border-style: solid;
  border-width: 0;
  cursor: pointer;
  display: ${({ hideButton }) => (hideButton ? "none" : "flex")};
  font-size: 15px;
  font-weight: 500;
  font-family: SF-Pro-Display;
  justify-content: center;
  padding: 0.5rem 1rem;

  transition: all 100ms linear;
  white-space: nowrap;


  
`