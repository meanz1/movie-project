import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";
import Palette from "../styles/styleVariable";

const BgContainer = styled.div`
  width: 100%;

  background-color: ${Palette.DarkGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <BgContainer>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            coverImg={movie.medium_cover_image}
          />
        </div>
      )}
    </BgContainer>
  );
}

export default Detail;
