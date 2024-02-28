import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1139px;
  margin: 64px auto;
  gap: 32px;

  @media screen and (max-width: 767px) {
    width: 360px;
    margin: 0 auto 16px auto;
    padding: 32px;
  }
`;

export const Title = styled.h1`
  font-size: 128px;
  font-weight: 700;

  @media screen and (max-width: 767px) {
    font-size: 96px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: 700;

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
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
    font-size: 14px;
    width: 148px;
  }
`;
