import React, { useState } from "react";
import styled from "styled-components";

const RadiosContainerWrapper = styled.div`
  display: flex;
  color: white;
  margin: 30px 40px;
`;

const MyRadio = styled.input`
  width: 1rem;
  height: 1rem;
  margin: 0 15px;
`;

const Title = styled.div`
  display: inline-block;
  white-space: nowrap;
  margin-right: 15px;
  font-size: 13px;
  cursor: pointer;
`;

const Promo = styled(Title)`
  cursor: pointer;
`;

export default function RadiosContainer() {
  const [travelType, setTravelType] = useState<string>("");

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setTravelType(v);
  };

  return (
    <RadiosContainerWrapper>
      <MyRadio
        type="radio"
        name="oneortwo"
        checked={travelType === "roundTrip"}
        onChange={(e1: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeEvent(e1)
        }
        value={"roundTrip"}
      />
      <Title
        onClick={() => {
          setTravelType("roundTrip");
        }}
      >
        Andata e ritorno
      </Title>
      <MyRadio
        type="radio"
        name="oneortwo"
        checked={travelType === "oneWayTrip"}
        onChange={(e2: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeEvent(e2)
        }
        value={"oneWayTrip"}
      />
      <Title
        onClick={() => {
          setTravelType("oneWayTrip");
        }}
      >
        Sola andata
      </Title>
      <span
        className="material-icons"
        style={{ cursor: "pointer", fontSize: "16px", paddingRight: "5px" }}
      >
        verified_user
      </span>
      <Promo>Applica codice di promozione</Promo>
    </RadiosContainerWrapper>
  );
}
