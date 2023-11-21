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
  width: 160px;
  height: 245px;
  object-fit: cover;
`;

const CardTitle = styled.span`
  font-size: 16px;
  width: 160px;
`;

function MovieCard({ id, coverImg, title }) {
  return (
    <CardContainer>
      <CardImg src={coverImg} alt="movie pster" />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
}

export default MovieCard;
