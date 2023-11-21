import styled from "styled-components";
import Palette from "../styles/styleVariable";

const CardContainer = styled.div`
  width: 220px;
  height: 315px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: ${Palette.LightGray};
`;

const CardImg = styled.img`
  width: 180px;
  height: 245px;
  object-fit: cover;
  border-radius: 8px;
`;

const CardTitle = styled.span`
  font-size: 14px;
  width: 180px;
  height: 32px;
  font-family: SOYOMapleBoldTTF;
  display: flex;
  justify-content: center;
  overflow: scroll;
`;

function MovieCard({ id, coverImg, title }) {
  return (
    <CardContainer>
      <CardImg src={coverImg} alt="movie poster" />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
}

export default MovieCard;
