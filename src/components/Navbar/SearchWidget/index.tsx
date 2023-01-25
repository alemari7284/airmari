import styled from "styled-components";
import ButtonsWithTabs from "../Tabs/ButtonsWithTabs";

const SearchWidgetWrapper = styled.div`
  height: 400px;
  background-color: #073590;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export default function SearchWidget() {
  return (
    <div>
      <SearchWidgetWrapper>
        <ButtonsWithTabs />
      </SearchWidgetWrapper>
    </div>
  );
}
