import styled from "styled-components";
import Palette from "../styles/styleVariable";
import { useNavigate } from "react-router-dom";

const BtnDiv = styled.button`
  width: 100px;
  height: 35px;
  font-family: ${Palette.Font};
  background-color: ${Palette.LightSkyBlue};
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
`;

function BackBtn() {
  const navigate = useNavigate();
  const movePage = () => {
    navigate(-1);
  };
  return <BtnDiv onClick={movePage}>뒤로 가기</BtnDiv>;
}

export default BackBtn;
