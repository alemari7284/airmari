import { format } from "date-fns";
import styled from "styled-components";

interface slInt {
  departureDate: string;
}
const SecondLineStyled = styled.div`
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  color: blue;
  font-weight: bold;
  margin-left: 45%;
  border: 1px solid darkgrey;
  padding: 30px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 1px 1px 10px grey;
  border-bottom: 5px solid orange;
`;

const SecondLine: React.FC<slInt> = ({ departureDate }) => {
  return (
    <SecondLineStyled>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{format(new Date(departureDate), "PP")}</span>
        <span style={{ fontWeight: "normal", color: "grey" }}>
          {format(new Date(departureDate), "ccc")}
        </span>
        <span style={{ marginTop: "30px", fontSize: "2rem" }}>
          {Math.floor(Math.floor(Math.random() * 500))} € <br />
        </span>
        <span
          style={{
            fontWeight: "normal",
            fontSize: "0.7rem",
            color: "grey",
          }}
        >
          (I prezzi sono fittizi)
        </span>
      </div>
    </SecondLineStyled>
  );
};

export default SecondLine;
