import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ProductImg = styled.img`
  width: 176px;
  height: 174px;
  object-fit: cover;

  @media screen and (max-width: 767px) {
    width: 156px;
  }
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;

export const ProductName = styled.h4`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
`;

export const ProductPrice = styled.strong`
  font-size: 16px;
  font-weight: 700;
`;

export const ProductButton = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  color: #2a7ae4;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
