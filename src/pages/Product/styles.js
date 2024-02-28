import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 1136px;
  margin: 64px auto;
  gap: 64px;

  @media screen and (max-width: 767px) {
    width: 360px;
    margin: 32px auto;
    gap: 32px;
  }
`;

export const ProductSection = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ProductImg = styled.img`
  width: 560px;
  height: 403px;
  object-fit: cover;

  @media screen and (max-width: 767px) {
    width: 360px;
    height: 240px;
  }
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  @media screen and (max-width: 767px) {
    padding: 16px;
  }
`;

export const ProductName = styled.h1`
  font-size: 52px;
  font-weight: 500;

  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`;

export const ProductPrice = styled.strong`
  font-size: 16px;
  font-weight: 700;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  font-weight: 400;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const SimilarSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SimilarTitle = styled.h2`
  font-size: 32px;

  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`;

export const SimilarProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  gap: 16px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
  }
`;
