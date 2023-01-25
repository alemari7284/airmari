import React from "react";
import styled from "styled-components";
import { headerProps } from "../../Navbar/Header";

interface hcInt {
  cities: { firstCity: string; secondCity: string };
  departureDate: string;
}

const HeaderContainer: React.FC<hcInt> = ({ cities, departureDate }) => {
  const HeaderContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${(props: headerProps) =>
      props.backgroundColor}; //#073590;
    color: blue;
    height: 55px;
    border: 1px solid grey;
    box-shadow: 3px 3px 3px grey;
  `;

  return (
    <HeaderContainerStyled backgroundColor={"white"}>
      <div className="inside">
        {cities?.firstCity && cities.firstCity}
        {cities?.secondCity && (
          <span className="material-icons containerIcon">swap_horiz</span>
        )}
        {cities?.secondCity && cities.secondCity}
        <div
          style={{
            textAlign: "left",
            color: "grey",
            fontSize: "0.8rem",
            fontWeight: "normal",
          }}
        >
          {departureDate && `Andata: ${departureDate}`}
        </div>
      </div>
    </HeaderContainerStyled>
  );
};

export default HeaderContainer;
