import styled from "styled-components";
import { dataInt } from "../../../interfaces/interface";

interface flInt {
  cities: dataInt;
}

const FirstLine: React.FC<flInt> = ({ cities }): JSX.Element => {
  const FirstLineStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 0 18% 0 18%;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
  `;

  return (
    <FirstLineStyled>
      <span
        style={{ marginRight: "5px" }}
        className="material-icons containerIcon"
      >
        flight_takeoff
      </span>
      {cities.firstCity} a {cities.secondCity}
    </FirstLineStyled>
  );
};

export default FirstLine;
