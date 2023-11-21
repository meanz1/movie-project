import styled from "styled-components";
import Palette from "../styles/styleVariable";

const TitleContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: SOYOMapleBoldTTF;
  font-size: 40px;
  color: ${Palette.Yellow};
`;

function TitleBanner({ title }) {
  return <TitleContainer>{title}</TitleContainer>;
}

export default TitleBanner;
