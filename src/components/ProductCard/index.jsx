import { useEffect } from "react";

import {
  ProductDiv,
  ProductImg,
  ProductInfos,
  ProductName,
  ProductPrice,
  ProductButton,
} from "./styles";

const ProductCard = ({ img, name, price, to }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <ProductDiv>
        <ProductImg src={img} alt="Imagem do Produto" />
        <ProductInfos>
          <ProductName>{name}</ProductName>
          <ProductPrice>R$ {price}</ProductPrice>
          <ProductButton to={to}>Ver produto</ProductButton>
        </ProductInfos>
      </ProductDiv>
    </>
  );
};

export default ProductCard;
