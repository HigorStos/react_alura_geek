import { Link } from "react-router-dom";
import styled from "styled-components";

export const AdminSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 1136px;
  margin: 64px auto;

  @media screen and (max-width: 767px) {
    width: 296px;
    margin: 32px auto;
  }
`;

export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: start;
    gap: 16px;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 32px;

  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`;

export const AddProduct = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
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
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 1136px;
  gap: 64px 16px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    width: 296px;
    gap: 16px;
  }
`;
