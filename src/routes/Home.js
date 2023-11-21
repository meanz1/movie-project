import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Palette from "../styles/styleVariable";

const BgContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Palette.DarkGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: SOYOMapleBoldTTF;
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 150px;
`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <BgContainer>
      {loading ? (
        <>
          <h1>Loading ...</h1>
        </>
      ) : (
        <>
          <TitleContainer>"Movie List"</TitleContainer>
          <MoviesGrid>
            {movies.map((elem, id) => (
              <MovieCard
                key={elem.id}
                id={elem.id}
                title={elem.title}
                coverImg={elem.medium_cover_image}
              />
            ))}
          </MoviesGrid>
        </>
      )}
    </BgContainer>
  );
}

export default Home;
