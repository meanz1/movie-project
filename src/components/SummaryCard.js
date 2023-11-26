import styled from "styled-components";
import Palette from "../styles/styleVariable";
import { useState } from "react";
const SummaryContainer = styled.div`
  height: 275px;
  width: 390px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: ${Palette.LightGray};
  display: flex;
  justify-content: center;
  padding: 20px;
  cursor: pointer;
`;

const SummaryText = styled.span`
  font-family: ${Palette.Font};
  overflow: auto;
`;

function SummaryCard({ summaryEn, summaryKo }) {
  const [isEnMode, setIsEnMode] = useState(true);

  const changeMode = () => {
    setIsEnMode(!isEnMode);
  };
  return (
    <SummaryContainer onClick={changeMode}>
      <SummaryText>{isEnMode ? summaryEn : summaryKo}</SummaryText>
    </SummaryContainer>
  );
}

export default SummaryCard;
