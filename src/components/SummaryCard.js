import styled from "styled-components";
import Palette from "../styles/styleVariable";
const SummaryContainer = styled.div`
  height: 275px;
  width: 390px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: ${Palette.LightGray};
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const SummaryText = styled.span`
  font-family: ${Palette.Font};
  overflow: auto;
`;

function SummaryCard({ summary }) {
  return summary ? (
    <SummaryContainer>
      <SummaryText>{summary}</SummaryText>
    </SummaryContainer>
  ) : null;
}

export default SummaryCard;
