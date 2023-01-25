import styled from "styled-components";

const Option = styled.div`
  color: white;
  margin: 0 40px 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;
  &:hover {
    margin: 0 2.52rem 0 1.875rem; //margin: 0px 40px 0px 30px;
    font-weight: bold;
  }

  &:target {
    border-bottom: 2px solid orange;
    margin: -2px 40px -2px 30px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-left: 40px;
  padding-top: 10px;
  justify-content: baseline;
  align-items: baseline;
`;

const Title = styled.div`
  display: inline-block;
  margin-left: 5px;
`;

export default function Buttons() {
  return (
    <ButtonsContainer>
      <Option as="a" href="#home" id="home">
        <span style={{ transform: "rotate(45deg)" }} className="material-icons">
          flight
        </span>
        <Title>VOLI</Title>
      </Option>
      <Option as="a" href="#car_rent" id="car_rent">
        <span className="material-icons">directions_car</span>
        <Title>AUTONOLEGGIO</Title>
      </Option>
      <Option as="a" href="#hotel" id="hotel">
        <span className="material-icons">hotel</span>
        <Title>HOTEL</Title>
      </Option>
      <Option as="a" href="#events" id="events">
        <span className="material-icons">photo_camera</span>
        <Title>EVENTI E ATTIVITA'</Title>
      </Option>
    </ButtonsContainer>
  );
}
