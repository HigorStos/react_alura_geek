import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledSection = styled.section``;

export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;

  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`;

export const ViewAllButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  color: #2a7ae4;
  transition: color 0.4s;

  &:hover {
    color: #5595e9;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  max-width: 100%;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
