import styled from "styled-components";
import logo from "../../../assets/logo.png";

export interface headerProps {
  backgroundColor: string;
}

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props: headerProps) => props.backgroundColor}; //#073590;
  color: white;
  height: 55px;
  z-index: 2;
`;

const Logo = styled.img`
  width: 157px;
  height: 32px;
  margin: 10px 0;
  cursor: pointer;
`;

const Nav = styled.nav`
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ListItem = styled.li`
  margin: 0 20px;
  cursor: pointer;
  /* &:hover {
    text-decoration: underline;
  } */
`;

const Vl = styled.div`
  width: 0.5px;
  height: 1rem;
  background-color: white;
`;

const Header: React.FC<headerProps> = ({ backgroundColor }): JSX.Element => {
  return (
    <HeaderWrapper backgroundColor={backgroundColor}>
      <Logo
        src={logo}
        onClick={() => {
          window.location.pathname = "/";
        }}
      />
      <Nav>
        <UnorderedList>
          <ListItem>Pianifica</ListItem>
          <Vl />
          <ListItem>Le mie prenotazioni</ListItem>
          <Vl />
          <ListItem>Iscriviti</ListItem>
          <Vl />
          <ListItem>Accedi</ListItem>
          <Vl />
          <ListItem>Aiuto</ListItem>
          <Vl />
          <ListItem>LINGUA</ListItem>
          {/* <Button cazzo="red" dio="dioporco">porcodio</Button> */}
        </UnorderedList>
      </Nav>
      {/* <div className="diocane">Cazzo</div> */}
    </HeaderWrapper>
  );
};

// interface myButton {     //esempio di typescript
//   cazzo: string;
//   dio: string;
// }

// const Button: React.FC<myButton> = (props) => {
//       <button {...props} style={{color: props.cazzo}} children={props.children?.toString().toUpperCase()} />}

export default Header;
