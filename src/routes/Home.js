import MovieCard from "../components/MovieCard";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import TitleBanner from "../components/TitleBanner";
import Rating from "../components/Rating";
import { UserContext } from "../App";
import { useUserContext } from "../context/rateContext";
const BgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  const { minRate, dispatchMinRate } = useUserContext();
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=${minRate}&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, [minRate]);

  const options = [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
    { id: 4, label: "4" },
    { id: 5, label: "5" },
    { id: 6, label: "6" },
    { id: 7, label: "7" },
    { id: 8, label: "8" },
    { id: 9, label: "9" },
    { id: 10, label: "10" },
  ];

  return (
    <BgContainer>
      {loading ? null : (
        <>
          <TitleBanner title="Movie List" />
          <Rating options={options} />
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
