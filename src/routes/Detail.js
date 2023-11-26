import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";
import TitleBanner from "../components/TitleBanner";
import BackBtn from "../components/BackBtn";
import SummaryCard from "../components/SummaryCard";
import axios from "axios";

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

  const [translatedText, setTranslatedText] = useState("");

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  const handleTranslate = async () => {
    try {
      const response = await axios.post("http://localhost:3001/translate", {
        text: movie.description_full,
        source: "en",
        target: "ko",
      });
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    if (movie.description_full) {
      handleTranslate();
    }
  }, [movie.description_full]);

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
            {movie.description_full ? (
              <SummaryCard
                summaryEn={movie.description_full}
                summaryKo={translatedText}
              />
            ) : null}
          </ContentContainer>
        </BgContainer>
      )}
    </>
  );
}

export default Detail;
