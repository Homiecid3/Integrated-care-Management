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
  width: 40%;
  margin-top: -5rem;
  margin-bottom: 1rem;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #950740;
  background: transparent;
  color: #fff;

  @media (max-width: 1250px) {
    width: 30%;
    margin-right: 2rem;
    margin-bottom: 3rem;
    margin-top: -19rem;
  }
`;

