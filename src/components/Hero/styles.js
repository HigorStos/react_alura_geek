import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 352px;
  background-image: url(${(props) => props.bgDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 767px) {
    height: 192px;
    background-image: url(${(props) => props.bgMobile});
  }
`;

export const HeroItems = styled.div`
  width: 1136px;
  margin-top: 150px;

  @media screen and (max-width: 767px) {
    width: 328px;
    margin-top: 78px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 52px;
  font-weight: 700;
  color: #fff;

  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`;

export const HeroSubtitle = styled.h3`
  margin: 16px 0;
  font-size: 22px;
  font-weight: 700;
  color: #fff;

  @media screen and (max-width: 767px) {
    margin: 8px 0;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const GoConsolesButton = styled(Link)`
  position: absolute;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  background-color: #2a7ae4;
  transition: background-color 0.4s;

  &:hover {
    background-color: #5595e9;
  }

  @media screen and (max-width: 767px) {
    width: 120px;
    height: 40px;
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 600;
  }
`;
