import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  background-color: #fff;
`;

export const HeaderDiv = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1136px;
  margin: 0 auto;
  padding: 32px 0;

  @media screen and (max-width: 767px) {
    width: 328px;
    padding: 16px 0;
  }
`;

export const HeaderMain = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderImg = styled.img`
  @media screen and (max-width: 767px) {
    width: 100px;
    height: 28px;
  }
`;

export const FormStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 392px;
  height: 40px;
  margin-left: 32px;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  color: #000;
  background-color: #f5f5f5;
  outline: none;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const SearchBarMobile = styled.input`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    width: 100%;
    height: 40px;
    margin: 0 auto;
    padding: 8px 32px;
    border: none;
    border-top: 2px solid #d9d9d9;
    border-bottom: 2px solid #d9d9d9;
    color: #000;
    outline: none;
  }
`;

export const SearchButton = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  right: 8%;
  color: #a2a2a2;
  transition: scale 0.4s;

  &:hover {
    scale: 1.2;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const SearchButtonMobile = styled(Link)`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    color: #464646;
    transition: scale 0.4s;

    &:hover {
      scale: 1.2;
    }
  }
`;

export const Login = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 186px;
  padding: 16px;
  font-size: 16px;
  color: #2a7ae4;
  border: 1px solid #2a7ae4;
  transition: background-color 0.4s;

  &:hover {
    background-color: #d4e4fa;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 133px;
    height: 40px;
    padding: 12px 16px;
    font-weight: 600;
    font-size: 14px;
  }
`;

export const AdminDiv = styled.div`
  display: flex;
  gap: 12px;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AdminMenu = styled(Link)`
  text-align: center;
  width: 186px;
  padding: 16px;
  color: #fff;
  background-color: #2a7ae4;
  border: 1px solid #2a7ae4;
  transition: background-color 0.4s;

  &:hover {
    background-color: #2a7ae4;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    padding: 12px 16px;
    font-weight: 600;
    font-size: 12px;
  }
`;

export const Logout = styled(Link)`
  text-align: center;
  width: 186px;
  padding: 16px;
  color: #2a7ae4;
  border: 1px solid #2a7ae4;
  transition: background-color 0.4s;

  &:hover {
    background-color: #d4e4fa;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    padding: 12px 16px;
    font-weight: 600;
    font-size: 12px;
  }
`;
