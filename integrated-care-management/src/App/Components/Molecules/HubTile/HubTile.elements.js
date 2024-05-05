import styled from "styled-components";


export const Card = styled.div`
  box-sizing: border-box;
  height: 150px;
  width: 150px;
  border-radius: 10px;
  background-color: #fff;
  padding: 30px 1.5rem 5px;
  display: grid;
  color: white;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
  box-shadow: 0px 2px 5px #e4e4e4;
  cursor: pointer;
  
  .content {
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    .text {
      text-decoration: none;
      font-size: 1rem;
      text-align: center;
      margin-top: 0.5rem;
      color: ${(props) => props.theme.colors.global.cardSpan};
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .icon {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70px;
      width: 70px;
      background: linear-gradient(226.36deg, #6f9dd1 12.03%, #487bb8 98.61%);
      border-radius: 50%;
      svg {
        height: 35px;
        width: 35px;
        fill: ${(props) => props.theme.colors.global.cardIcon};
        align-self: center;
      }
    }
  }
`