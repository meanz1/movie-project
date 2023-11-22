import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";
import TitleBanner from "../components/TitleBanner";
import BackBtn from "../components/BackBtn";
import UserContext from "../App";
const BgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BannerContainer = styled.div`
  gap: 20px;
  display: flex;
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
    <>
      {loading ? null : (
        <BgContainer>
          <BannerContainer>
            <BackBtn />
            <TitleBanner title={movie.title}></TitleBanner>
          </BannerContainer>
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            coverImg={movie.medium_cover_image}
          />
        </BgContainer>
      )}
    </>
  );
}

export default Detail;