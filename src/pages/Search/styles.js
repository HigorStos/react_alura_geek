import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 1136px;
  margin: 64px auto;

  @media screen and (max-width: 767px) {
    width: 360px;
    margin: 32px auto;
  }
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  margin-bottom: 22px;

  @media screen and (max-width: 767px) {
    width: 328px;
    margin: 0 auto 22px auto;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 32px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`;

export const ProductsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 64px 16px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    width: 328px;
    margin: 0 auto;
  }
`;
