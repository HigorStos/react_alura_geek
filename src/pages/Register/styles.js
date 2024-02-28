import { Link } from "react-router-dom";
import styled from "styled-components";

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: 92px auto;

  @media screen and (max-width: 767px) {
    gap: 16px;
  }
`;

export const RegisterTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;

export const RegisterInput = styled.input`
  width: 424px;
  height: 64px;
  padding: 12px;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: 400;
  border: none;
  border-radius: 4px;
  border-bottom: 1px solid #c8c8c8;
  outline: none;

  @media screen and (max-width: 767px) {
    width: 275px;
    height: 41px;
  }
`;

export const RegisterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 424px;
  height: 64px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  border: none;
  background-color: #2a7ae4;
  transition: background-color 0.4s;

  &:hover {
    background-color: #5595e9;
  }

  @media screen and (max-width: 767px) {
    width: 109px;
    height: 40px;
    font-size: 14px;
  }
`;

export const GoLogin = styled.div`
  display: flex;
  gap: 4px;
`;

export const GoLoginText = styled.p`
  font-size: 14px;
`;

export const GoLoginButton = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  color: #2a7ae4;
  text-decoration: none;
`;
