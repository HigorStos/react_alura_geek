import { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import productsApi from "@/api/productsApi";
import ProductCard from "@/components/ProductCard";

import {
  StyledSection,
  SectionHeader,
  SectionTitle,
  ViewAllButton,
  ProductList,
} from "./styles";

const ProductSection = ({ name, category, page }) => {
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      await productsApi.get("/products").then((res) => {
        const filtered = res.data
          .filter((product) => product.category == category)
          .slice(0, 6);
        setProductsFiltered(filtered);
      });
    };

    loadProducts();
  }, [category]);

  return (
    <>
      <StyledSection>
        <SectionHeader>
          <SectionTitle>{name}</SectionTitle>
          <ViewAllButton to={page}>
            Ver tudo <AiOutlineArrowRight />
          </ViewAllButton>
        </SectionHeader>
        <ProductList>
          {productsFiltered.map((product) => (
            <ProductCard
              key={product.id}
              img={product.img_url}
              name={product.name}
              price={product.price}
              to={`product/${product.id}`}
            />
          ))}
        </ProductList>
      </StyledSection>
    </>
  );
};

export default ProductSection;
