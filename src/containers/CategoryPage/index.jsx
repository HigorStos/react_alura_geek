import { useState, useEffect } from "react";

import productsApi from "@/api/productsApi";

import ProductCard from "@/components/ProductCard";

import {
  StyledSection,
  SectionHeader,
  SectionTitle,
  ProductsDiv,
} from "./styles";

const CategoryPage = ({ category, title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      await productsApi.get("/products").then((res) => {
        const filtered = res.data.filter(
          (product) => product.category === category
        );

        setProducts(filtered);
      });
    };

    loadProducts();
  }, [category]);

  return (
    <>
      <StyledSection>
        <SectionHeader>
          <SectionTitle>{title}</SectionTitle>
        </SectionHeader>
        <ProductsDiv>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              img={product.img_url}
              name={product.name}
              price={product.price}
              to={`/product/${product.id}`}
            />
          ))}
        </ProductsDiv>
      </StyledSection>
    </>
  );
};

export default CategoryPage;
