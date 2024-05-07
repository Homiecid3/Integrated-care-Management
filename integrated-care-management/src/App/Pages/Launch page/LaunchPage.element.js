//IMPOERT: STYLE
import styled from "styled-components";

export const SignInHolder = styled.div`
  background-color: #ffffff;
  width: 350px;
  height: 350px;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 6rem;
  padding: 5rem 5rem;
  gap: 1rem;
  border-radius: 4px;
  box-shadow: 2px 1px 2px 2px #e1e1e1;
`;

export const DedalusLogoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  positiom: absolute;
  padding-left: 4rem;
  margin-top: -4rem;
  padding-bottom: 0.5rem;
  justify-content: flex-start;
`;

export const InnerFormContainer = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-item: center;
  margin: auto;
  padding: 2rem 1rem;
  gap: 1rem;
  border-radius: 4px;
`;

export const ButtonContainer = styled.div`
   width: 10rem;
   flex-direction: column;
   height: auto;
   display: flex;
   justify-content: center;
   padding-left: 5rem;
   padding-top: 2rem;
`;
