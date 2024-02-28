import { useState, useEffect } from "react";

import productsApi from "@/api/productsApi";

import ProductCardAdmin from "@/components/ProductCardAdmin";

import {
  AdminSection,
  SectionHeader,
  SectionTitle,
  AddProduct,
  Products,
} from "./styles";

const Admin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      await productsApi.get("/products").then((res) => {
        setProducts(res.data);
      });
    };

    loadProducts();
  }, []);

  return (
    <>
      <AdminSection>
        <SectionHeader>
          <SectionTitle>Todos os produtos</SectionTitle>
          <AddProduct to="/new">Adicionar produto</AddProduct>
        </SectionHeader>
        <Products>
          {products.map((product) => (
            <ProductCardAdmin
              key={product.id}
              img={product.img_url}
              name={product.name}
              price={product.price}
              id={product.id}
            />
          ))}
        </Products>
      </AdminSection>
    </>
  );
};

export default Admin;
