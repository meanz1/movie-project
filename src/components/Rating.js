import { useState } from "react";
import styled from "styled-components";
import Palette from "../styles/styleVariable";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setMinRate } from "../actions";
const RatingContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
`;
const SelectedRating = styled.div`
  font-family: ${Palette.Font};
  height: 40px;
  width: 120px;
  background-color: aliceblue;

  ${(props) =>
    !props.open &&
    `
  display: flex;
  justify-content: center;
  align-items: center;
  `}
`;

const MinRateText = styled.span`
  font-family: ${Palette.Font};
  position: absolute;
  text-align: center;
`;

const RatingTitle = styled.span`
  font-family: ${Palette.Font};
  color: ${Palette.SkyBlue};
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const RatingBtn = styled.button`
  background-color: ${Palette.SkyBlue};
  color: black;
  height: 40px;
  font-size: 12px;
  border: none;
  cursor: pointer;
  font-family: ${Palette.Font};
`;
const RatingContent = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  margin-top: 40px;
  position: absolute;
  background-color: aliceblue;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  font-family: ${Palette.Font};
`;
const RatingItem = styled.a`
  padding: 12px 16px;
  display: block;
  text-decoration: none;
  color: #333;
  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;

function Rating({ options }) {
  const minRate = useSelector((state) => state.rate);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItmeClick = (option) => {
    dispatch(setMinRate(option));
    setIsOpen(false);
  };

  return (
    <RatingContainer>
      <RatingTitle>평점</RatingTitle>
      <SelectedRating open={isOpen}>
        <MinRateText>{isOpen ? null : minRate}</MinRateText>
        <RatingContent open={isOpen}>
          {options.map((option) => {
            return (
              <RatingItem
                key={option.id}
                onClick={() => handleItmeClick(option.label)}
              >
                {option.label}
              </RatingItem>
            );
          })}
        </RatingContent>
      </SelectedRating>
      <RatingBtn onClick={handleToggle}>{isOpen ? `닫힘` : `열림`}</RatingBtn>
    </RatingContainer>
  );
}

export default Rating;
