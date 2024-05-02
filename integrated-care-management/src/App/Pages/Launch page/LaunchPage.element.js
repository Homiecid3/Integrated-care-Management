//IMPOERT: STYLE
import styled from "styled-components";

export const SignInHolder = styled.div`
  background-color: #ffffff;
  width: 400px;
  height: 400px;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 10rem;
  padding: 4rem 5rem;
  gap: 1rem;
  border-radius: 4px;
  box-shadow: 2px 1px 2px 2px #E1E1E1;
`;

export const InputField = styled.input`
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  margin-top: -5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: none;
  background-color: #fff;
  color: #000;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 0 5px #7D7D7F;
    transition: all 100ms linear;
  }

  @media (max-width: 1250px) {
    width: 30%;
    margin-right: 2rem;
    margin-bottom: 3rem;
    margin-top: -19rem;
  }
`;

export const InputLabelWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-direction: column;
  max-width: 300px;
  width: 100%
`;

