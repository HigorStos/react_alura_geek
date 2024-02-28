import styled from "styled-components";
import { ImBin2 } from "react-icons/im";
import { BiSolidPencil } from "react-icons/bi";
import { BiSolidSave } from "react-icons/bi";
import { FaCamera } from "react-icons/fa";

export const ProductMain = styled.div`
  width: 176px;
  position: relative;

  @media screen and (max-width: 767px) {
    width: 140px;
  }
`;

export const IconsDiv = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
`;

export const BinIcon = styled(ImBin2)`
  width: 24px;
  height: 24px;
  color: #007ce4;
  cursor: pointer;
  transition: color 0.4s;

  &:hover {
    color: #5595e9;
  }
`;

export const PencilIcon = styled(BiSolidPencil)`
  width: 24px;
  height: 24px;
  color: #007ce4;
  cursor: pointer;
  transition: color 0.4s;

  &:hover {
    color: #5595e9;
  }
`;

export const SaveIcon = styled(BiSolidSave)`
  width: 24px;
  height: 24px;
  color: #007ce4;
  cursor: pointer;
  transition: color 0.4s;

  &:hover {
    color: #5595e9;
  }
`;

export const EditImg = styled.form`
  position: absolute;
  top: 30%;
  left: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditImgIcon = styled(FaCamera)`
  width: 36px;
  height: 36px;
  color: #007ce4;
  cursor: pointer;
  transition: color 0.4s;

  &:hover {
    color: #5595e9;
  }
`;

export const EditImgInput = styled.input`
  display: none;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 174px;
  object-fit: cover;

  @media screen and (max-width: 767px) {
    width: 140px;
    height: 174px;
  }
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;

export const ProductName = styled.textarea`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  color: #464646;
  border: none;
  background-color: none;
  resize: none;
`;

export const PriceDiv = styled.div`
  display: flex;
  align-items: center;
  width: 140px;
`;

export const ProductPrice = styled.input`
  display: flex;
  align-items: center;
  height: 20px;
  padding: 0 4px;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 700;
  color: #464646;
  border: none;
  background-color: none;
`;

export const ProductID = styled.p`
  font-size: 14px;
`;
