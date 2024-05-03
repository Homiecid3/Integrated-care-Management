//IMPORTS: PACKAGES

import styled from "styled-components";

export const Sidebar = styled.div`
  background-color: #103157;
  width: 72px;
  height: 100%;
  color: white;
`;
export const BurgerHolders = styled.button`
  color: #fff;
  background-color: #103157;
  padding: 1rem;
  border: none;
  & svg {
    cursor: pointer;
    transition: all 100ms linear;

    fill: #fff;
    height: auto;
    width: 40px;
  }
`;

export const HomeHolders = styled.button`
  color: #fff;
  padding: 1rem;
  background-color: #103157;
  border: none;
  & svg {
    cursor: pointer;
    transition: all 100ms linear;

    fill: #fff;
    height: auto;
    width: 40px;
  }
`;

export const NavBar = styled.div`
  background-color: #fff;
  position: absolute;
  margin-left: 4.5rem;
  width: 100%;
  height: 70px;
  box-shadow: 2px 1px 2px 2px #E1E1E1;
`

export const Logo =styled.div`
  height: 10px;
  width: 10px;
`
