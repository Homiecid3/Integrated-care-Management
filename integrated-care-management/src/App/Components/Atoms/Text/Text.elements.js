// Import: Dependencies
import styled, { css } from "styled-components";

export const defineColor = (color) =>
    color === "blue"
        ? "#5578a0"
        : color === "brightblue"
            ? "#0a72e6"
            : color === "orange"
                ? "#FE6F61"
                : color === "darkgreen"
                    ? "#05658E"
                    : color === "lightgreen"
                        ? "#038889"
                        : color === "purple"
                            ? "#5E60CE"
                            : color === "grey"
                                ? "#757579 !important"
                                : color === "white"
                                    ? "#FFFFFF"
                                    : color === "red"
                                        ? "#E20000 !important"
                                        : color === "black"
                                            ? "#000 !important"
                                            : "black";

// SWITCH CASE "h1" - Pat ient banner heading
export const StyledH1 = styled.h1`
  text-decoration: none;
  font-family: SF-Pro-Display;
  font-size: 1.375rem;
  /* or font-size: 20px; */
  font-weight: 900;
  font-style: normal;
  line-height: 24px;
  /* margin: 0 0 1rem 0;
   */
  margin: ${({ marginLeft }) => (marginLeft ? "0 0 0 5px" : "0 0 1rem 0")};
  color: #215195;
  display: ${({ display }) => (display ? display : "block")};
`;

// SWITCH CASE "h2"
export const StyledH2 = styled.h2`
 text-decoration: none;
  font-family: SF-Pro-Display;
  font-size: 1rem;
  /* or font-size: 18px; */
  font-weight: 600;
  font-style: normal;
  line-height: 24px;
  color: ${(props) => defineColor(props.color ? props.color : "black !important")};
  margin: 0 0 1rem 0;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0px")};
`;

// SWITCH CASE "h3" - Add alert page title
export const StyledH3 = styled.h3`
  text-decoration: none;
  font-family: SF-Pro-Display;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.3rem")};
  /* or font-size: 24px; */
  font-style: normal;
  line-height: 24px;
  font-weight: 900;
  margin: 0 0 1rem 0;
  color: ${(props) => defineColor(props.color ? props.color : "black !important")};
`;

// SWITCH CASE "h4" - no styled H4 in oneEd. added as extra
export const StyledH4 = styled.h4`
  text-decoration: none;
  cursor: ${({ cursorPointer }) => cursorPointer && "pointer"};
  text-decoration: ${({ underLine }) => underLine && "underline"};
  font-family: SF-Pro-Display;
  font-size: 1.05rem;
  font-style: normal;
  line-height: 24px;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: ${(props) => defineColor(props.color ? props.color : "black !important")};
`;

// SWITCH CASE "h5" - Text used for patient name in patient banner
export const StyledH5 = styled.h5`
  font-family: SF-Pro-Display;
  font-size: 1.25rem;
  /* or font-size: 20px; */
  font-weight: ${({ isBold }) => (isBold ? "bolder" : "400")};
  font-style: normal;
  line-height: 24px;
  color: ${(props) => defineColor(props.color)};
  margin: 0 0 1rem 0;
`;

const largeLabelStyles = css`
  font-family: "SF-Pro-Display";
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px;
  margin-bottom: 4px;
  user-select: none;
  color: ${(props) => defineColor(props.color)};
`;

// SWITCH CASE "labelL" - Patient banner keys/titles
export const StyledLargeLabel = styled.label`
  ${largeLabelStyles}
`;

// pseudoLargeLabel has the same styling as the Large Label but is a div
export const PseudoLargeLabel = styled.div`
  ${largeLabelStyles}
`;

const smallLabelStyles = css`
  font-family: "SF-Pro-Display";
  font-size: 14px;
  font-weight: ${({ isBold }) => (isBold ? "bolder" : "500")};
  font-style: normal;
  line-height: 16px;
  margin-bottom: 4px;
  color: ${(props) => defineColor(props.color ? props.color : "grey")};
  ${(props) => props.color && `color: ${defineColor(props.color)}`};
`;

// SWITCH CASE "labelS" - Patient banner values
export const StyledSmallLabel = styled.label`
  ${smallLabelStyles}
`;

export const PseudoSmallLabel = styled.div`
  ${smallLabelStyles}
`;

// SWITCH CASE "span" - Health history allergy/alert/conditions/meds etc tile text
export const StyledSmallSpan = styled.span`
  text-decoration: none;
  font-family: "SF-Pro-Display";
  font-size: 0.8rem;
  /* or font-size: 11px; */
  font-weight: ${({ isBold, fontWeight }) => (isBold ? "700" : fontWeight ? "500 !important" : "400")};
  font-style: normal;
  display: ${({ display }) => (display ? display : "inline")};
  line-height: 16px;
  margin: ${({ marginLeft }) => (marginLeft ? "0 0 0 5px" : null)};
  color: ${(props) =>
        props.healthConditionName === "Medication"
            ? "#757579"
            : props.healthConditionName === "Allergies"
                ? "#757579"
                : props.color
                    ? props.color
                    : props.theme.colors.global.cardSpan};
`;

// SWITCH CASE "navSpan" - Tab nav text
export const NavSmallSpan = styled.span`
  font-family: "SF-Pro-Display";
  font-size: 0.8rem;
  /* or font-size: 12.8px */
  font-weight: 500;
  font-style: normal;
  line-height: 16px;

  color: ${(props) => defineColor(props.color)};
`;

// SWITCH CASE "smallBlueText" used for "(male 38 years)"
export const SmallBlueText = styled.p`
  font-family: "SF-Pro-Display";
  font-size: 10px;
  /* or font-size: 12.8px */
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  margin: 0;
  color: ${(props) => defineColor(props.color)};
`;

// SWITCH CASE "patientName" used for large patient name
export const PatientName = styled.h2`
  font-family: "SF-Pro-Display";
  font-size: 1.3rem;
  /* or font-size: 12.8px */
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  margin: 0;
  color: ${(props) => defineColor(props.color)};
`;

// DEFAULT SWITCH CASE - Standard paragraph
export const StyledParagraph = styled.p`
  font-family: "SF-Pro-Display";
  font-size: 14px;
  /* or font-size: 16px; */
  font-weight: ${({ isBold, fontWeight }) => (isBold ? "700 !important" : fontWeight ? "500 !important" : "400")};
  font-style: normal;
  line-height: 16px;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0px")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "4px")};
  color: ${(props) => defineColor(props.color ? props.color : "#757579 !important")};
`;
//#757579
// SWITCH CASE used for the ipad bottom nav bar text
export const NavP = styled.p`
  font-family: "SF-Pro-Display";
  font-size: 0.9rem;
  font-weight: ${({ isBold }) => (isBold ? "700 !important" : "400")};
  font-style: normal;
  line-height: 16px;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0px")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "4px")};
  color: ${(props) => defineColor(props.color ? props.color : "#757579 !important")};
`;

// SWITCH CASE "navSpan" - Tab nav text
export const photoLabel = styled.span`
  font-family: "SF-Pro-Display";
  font-size: 0.75rem;
  /* or font-size: 12.8px */
  font-weight: 400;
  font-style: normal;
  line-height: 16px;

  color: ${(props) => defineColor(props.color)};
`;

//SWITCH CASE "CardText" - smaller text for cards
export const CardText = styled.span`
  font-family: "SF-Pro-Display";
  font-size: 14px;
  font-weight: 600 !important;
  font-style: normal;
  line-height: 16px;
  color: ${(props) => defineColor(props.color ? props.color : "black")};
`;
