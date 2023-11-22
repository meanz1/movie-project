import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";
import TitleBanner from "../components/TitleBanner";
import BackBtn from "../components/BackBtn";
import UserContext from "../App";
import SummaryCard from "../components/SummaryCard";
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

const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
`;

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  console.log(movie);
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
          <ContentContainer>
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              coverImg={movie.medium_cover_image}
            />
            <SummaryCard summary={movie.description_full} />
          </ContentContainer>
        </BgContainer>
      )}
    </>
  );
}

export default Detail;
