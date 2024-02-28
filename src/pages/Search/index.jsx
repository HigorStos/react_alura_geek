import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import productsApi from "@/api/productsApi";

import ProductCard from "@/components/ProductCard";

import {
  StyledSection,
  SectionHeader,
  SectionTitle,
  ProductsDiv,
} from "./styles";

const Search = () => {
  const [products, setProducts] = useState([]);

  const { q } = useParams();

  useEffect(() => {
    productsApi.get("/products").then((res) => {
      const filtered = res.data.filter((product) =>
        product.name.toLowerCase().includes(q.toLowerCase())
      );
      setProducts(filtered);
    });
  }, [q]);

  return (
    <>
      <StyledSection>
        <SectionHeader>
          {products.length > 0 ? (
            <>
              <SectionTitle>{`Resultados para "${q}"`}</SectionTitle>
              <h3>{products.length} produtos encontrados</h3>
            </>
          ) : (
            <SectionTitle>{`Nenhum resultado encontrado para "${q}".`}</SectionTitle>
          )}
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

export default Search;
