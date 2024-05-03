import styled from "styled-components";

export const TwoColumnGridAutoFit = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(50% - 2rem), 1fr));
  column-gap: 2rem;
  row-gap: 1rem;

  @media (max-width: 650px) {
    grid-template-columns: auto;
  }
`;

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 2rem; // to keep columns apart at smaller screen sizes before media query triggers

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 2rem; // to keep columns apart at smaller screen sizes before media query triggers

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FourColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 0.5fr 0.5fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 2rem; // to keep columns apart at smaller screen sizes before media query triggers

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FiveColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 2rem; // to keep columns apart at smaller screen sizes before media query triggers
  margin-bottom: 1rem;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SixColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 2rem; // to keep columns apart at smaller screen sizes before media query triggers
  margin-bottom: 1rem;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SevenColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 0.5rem; // to keep columns apart at smaller screen sizes before media query triggers
  margin-bottom: 1rem;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const MusculoskeletalContainer = styled.div`
  background-color: ${(props) => (props.oddOrEven === "odd" ? "#e5e5e5" : "white")};
  padding: 1rem;

  overflow-x: auto;
`;

export const Width = styled.div`
  max-width: 400px;
`;

export const ContainerBox = styled.div`
  word-break: break-word;
  max-width: 400px;
`;
