import styled from "styled-components";
import Logo from "../../../assets/lufthansa.png";
import Flight from "../../../assets/flight.png";
import React from "react";

interface ticketInt {
  airportCodeDep: string;
  dateTimeDep: string;
  airportCodeArr: string;
  dateTimeArr: string;
  duration: string;
  stops: number;
  price: number;
}

const TicketContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  margin-bottom: 40px;
  transition: all ease 0.2s;
  &:hover {
    transform: translate(0, -10px);
  }
`;

const TicketStyled = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  min-width: 900px;
  /* height: 6rem; */
  border: 1px solid grey;
  box-shadow: 3px 3px 3px grey;
  padding: 30px;
  box-sizing: border-box;
  cursor: pointer;
  color: blue;
  font-weight: bold;
  margin-top: 40px;
  /* border-right: dotted grey; */
  z-index: 0;
`;

const PriceStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 6rem;
  color: blue;
  border: 1px solid grey;
  margin-top: 43px;
  margin-bottom: 2px;
  margin-left: -1px;
  text-align: center;
  justify-content: center;
  align-items: flex-end;
  padding-right: 20px;
  font-weight: bold;
  font-size: 1.8rem;
  cursor: pointer;
  box-shadow: 3px 3px 3px grey;
  /* border-left: dotted grey; */
  box-sizing: border-box;
  z-index: 1;
  background-color: white;
`;

const Ticket: React.FC<ticketInt> = ({
  airportCodeDep,
  dateTimeDep,
  airportCodeArr,
  dateTimeArr,
  duration,
  stops,
  price,
}): JSX.Element => {
  const vanillaDepTime = dateTimeDep.substring(dateTimeDep.indexOf("T") + 1);
  const vanillaArrTime = dateTimeArr.substring(dateTimeArr.indexOf("T") + 1);
  const howLong = duration.substring(duration.indexOf("T") + 1);

  return (
    <TicketContainer>
      <TicketStyled>
        <img src={Logo} alt="Lufthansa" width="50rem" height="50rem" />
        <span
          style={{
            position: "absolute",
            marginTop: "70px",
            fontSize: "0.6rem",
            marginLeft: "3px",
            color: "green",
          }}
        >
          Lufthansa
        </span>
        <span style={{ fontSize: "2rem" }}>{vanillaDepTime}</span>
        <span
          style={{
            position: "absolute",
            marginTop: "70px",
            fontSize: "0.6rem",
            color: "blue",
            left: "201px",
          }}
        >
          {airportCodeDep}
        </span>
        <img src={Flight} alt="" />
        <span style={{ fontSize: "2rem" }}>{vanillaArrTime}</span>
        <span
          style={{
            position: "absolute",
            marginTop: "70px",
            fontSize: "0.6rem",
            color: "blue",
            right: "58px",
          }}
        >
          {airportCodeArr}
        </span>
        <span
          style={{
            position: "absolute",
            marginTop: "70px",
            fontSize: "0.6rem",
            color: "yellowgreen",
            right: "39%",
          }}
        >
          Durata: {howLong}
        </span>
        <span
          style={{
            position: "absolute",
            marginTop: "70px",
            fontSize: "0.6rem",
            color: "yellowgreen",
            right: "20%",
          }}
        >
          Scali: {stops}
        </span>
      </TicketStyled>
      <PriceStyled>
        <div style={{ marginBottom: "10px", color: "grey" }}>Tariffa: </div>
        <div style={{ fontSize: "2rem" }}>{price} €</div>
      </PriceStyled>
    </TicketContainer>
  );
};

export default Ticket;
