import styled from "styled-components";

export const FooterSection = styled.section`
  display: flex;
  width: 100%;
  padding: 64px 0;
  background-color: #eaf2fd;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 16px;
  }
`;

export const FooterInfos = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin: 0 auto;
  width: 1136px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 328px;
  }
`;

export const QuestionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 16px;
  list-style: none;

  @media screen and (max-width: 767px) {
    width: 100%;
    text-align: center;
    margin: 16px 0 32px 0;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const NameInput = styled.input`
  width: 560px;
  height: 56px;
  margin-bottom: 16px;
  padding: 12px;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  border: none;
  border-bottom: 1px solid #c8c8c8;
  background-color: #fff;
  outline: none;

  @media screen and (max-width: 767px) {
    width: 328px;
  }
`;

export const MessageArea = styled.textarea`
  width: 560px;
  height: 82px;
  margin-bottom: 8px;
  padding: 12px;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  border: none;
  border-bottom: 1px solid #c8c8c8;
  background-color: #fff;
  outline: none;
  overflow-y: auto;
  resize: none;

  @media screen and (max-width: 767px) {
    width: 328px;
  }
`;

export const FormButton = styled.button`
  width: 165px;
  height: 51px;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  border: none;
  background-color: #2a7ae4;
  transition: background-color 0.4s;

  &:hover {
    background-color: #5595e9;
  }
`;

export const DeveloperCredits = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
  background-color: #fff;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
