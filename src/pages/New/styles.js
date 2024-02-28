import styled from "styled-components";
import { IoMdCloudUpload } from "react-icons/io";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 559px;
  gap: 16px;
  margin: 64px auto;

  @media screen and (max-width: 767px) {
    width: 328px;
  }
`;

export const FormTitle = styled.h1`
  font-size: 32px;

  @media screen and (max-width: 767px) {
    font-size: 26px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 12px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  border-bottom: 1px solid #c8c8c8;
  outline: none;
`;

export const FormImgDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const FormImgFileLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 4px;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
`;

export const FormImgFileIcon = styled(IoMdCloudUpload)`
  width: 24px;
  height: 24px;
  color: #2a7ae4;
`;

export const FormImgFileInput = styled.input`
  display: none;
`;

export const FormSelector = styled.select`
  width: 100%;
  height: 56px;
  padding: 12px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #c8c8c8;
  outline: none;
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  height: 82px;
  padding: 12px;
  font-size: 16px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  border: none;
  border-bottom: 1px solid #c8c8c8;
  outline: none;
  overflow-y: auto;
  resize: none;
`;

export const FormButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  padding: 16px;
  border: none;
  background-color: #2a7ae4;
  transition: background-color 0.4s;

  &:hover {
    background-color: #5595e9;
  }
`;
