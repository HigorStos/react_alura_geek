import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import productsApi from "@/api/productsApi";

import ProductCard from "@/components/ProductCard";

import {
  ProductImg,
  MainDiv,
  ProductSection,
  ProductInfos,
  ProductName,
  ProductPrice,
  ProductDescription,
  SimilarSection,
  SimilarTitle,
  SimilarProducts,
} from "./styles";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    const loadProduct = async () => {
      await productsApi.get(`/products/${id}`).then((res) => {
        setProduct(res.data);
      });
    };

    const loadSimilar = async () => {
      await productsApi.get("/products").then((res) => {
        const similar = res.data
          .filter(
            (similarProduct) =>
              similarProduct.category == product.category &&
              similarProduct.id !== product.id
          )
          .slice(0, 6);
        setSimilarProducts(similar);
      });
    };

    loadProduct();
    loadSimilar();
  }, [id, product.category, product.id]);

  return (
    <>
      <MainDiv>
        <ProductSection>
          <ProductImg
            src={product.img_url}
            alt={`Foto do produto ${product.name}`}
          />
          <ProductInfos>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>R$ {product.price}</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>
          </ProductInfos>
        </ProductSection>
        <SimilarSection>
          <SimilarTitle>Produtos similares</SimilarTitle>
          <SimilarProducts>
            {similarProducts.map((similarProduct) => (
              <ProductCard
                key={similarProduct.id}
                img={similarProduct.img_url}
                name={similarProduct.name}
                price={similarProduct.price}
                to={`/product/${similarProduct.id}`}
              />
            ))}
          </SimilarProducts>
        </SimilarSection>
      </MainDiv>
    </>
  );
};

export default Product;
