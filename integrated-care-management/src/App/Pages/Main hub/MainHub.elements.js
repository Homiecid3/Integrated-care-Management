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
  cursor: pointer;
  background-color: #103157;
  padding: 0.5rem 0.5rem 1rem 0.7rem;
  border: none;
  & svg {
    transition: all 100ms linear;
    fill: #fff;
    height: auto;
    width: 50px;
  }
`;

export const HomeHolders = styled.button`
  color: #fff;
  padding: 1rem;
  background-color: #103157;
  cursor: pointer;
  border: none;
  & svg {
    cursor: pointer;
    transition: all 100ms linear;
    fill: #fff;
    height: auto;
    width: 40px;
  }
`;

export const TitleHolder = styled.div`
  display: inline-grid;
  gap: 1rem;
  grid-template-columns: auto;
  grid-template-rows: 2rem 100%;
`;

export const NavBar = styled.div`
  background-color: #fff;
  padding-left: 1rem;
  position: absolute;
  margin-left: 4.5rem;
  width: 100%;
  height: 85px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  box-shadow: 2px 1px 2px 2px #e1e1e1;
`;

export const Logo = styled.div`
  height: 10px;
  width: 10px;
`;

export const HubContainer = styled.main`
  box-sizing: border-box;
  background-size: cover;
  display: grid;
  width: 100%;
  height: auto;
  row-gap: 7rem;
  overflow: hidden;
  grid-template-columns: 3rem 3rem 3rem;
  grid-template-rows: 4rem 4rem 100%;
  margin-top: 8rem;
  margin-left: 7rem;
  column-gap: 9rem;
  position: absolute;
`;

export const CrewIconWrapper = styled.div`
  width: 45px;
  margin-top: 1rem;
  height: 45px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -1px;
  cursor: pointer;
  background-color: #fff;

  svg {
    fill: #a9a9a9;
    width: 45px;
  }
`;

export const CrewTextWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: normal;
  flex-direction: column;
`;

export const UserWrapper = styled.div`
  display: grid;
  grid-template-columns: 7rem 3rem;
  gap: .5rem;
  margin-left: auto; 
  margin-right: 7em;
  grid-template-rows: 2rem 100%;
`;
