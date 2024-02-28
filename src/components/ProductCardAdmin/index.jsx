import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import productsApi from "@/api/productsApi";

import {
  ProductMain,
  IconsDiv,
  ProductImg,
  ProductInfos,
  ProductName,
  PriceDiv,
  ProductPrice,
  ProductID,
  BinIcon,
  PencilIcon,
  SaveIcon,
  EditImg,
  EditImgIcon,
  EditImgInput,
} from "./styles";

const ProductCardAdmin = ({ img, name, price, id }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [imgFile, setImgFile] = useState(null);

  useEffect(() => {
    setProductName(name);
    setProductPrice(price);
  }, [name, price]);

  const deleteProduct = async () => {
    await productsApi
      .delete(`products/${id}`)
      .then(() => {
        toast.success("Produto deletado com sucesso!");
      })
      .catch(() => {
        toast.error("Erro ao deletar o produto.");
      });
  };

  const editProduct = () => {
    setIsEditing(true);
  };

  const saveEdit = async () => {
    const product = await productsApi.get(`/products/${id}`);
    await productsApi
      .put(`products/${id}`, {
        ...product.data,
        img_url: imgFile,
        name: productName,
        price: productPrice,
      })
      .then(() => {
        toast.success("Produto editado com sucesso!");
        window.location.reload();
      })
      .catch(() => {
        toast.error("Erro ao editar o produto.");
      });

    setIsEditing(false);
  };

  const editImg = (e) => {
    const data = new FileReader();
    data.addEventListener("load", () => {
      setImgFile(data.result);
    });
    data.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <ProductMain>
        <ProductImg src={img} alt={`Imagem do Produto ${name}`} />
        <IconsDiv>
          <BinIcon onClick={() => deleteProduct()} />
          {isEditing ? (
            <SaveIcon onClick={() => saveEdit()} />
          ) : (
            <PencilIcon onClick={() => editProduct()} />
          )}
        </IconsDiv>
        {isEditing && (
          <EditImg>
            <label htmlFor="imgFile">
              <EditImgIcon />
            </label>
            <EditImgInput
              onChange={editImg}
              type="file"
              name="imgFile"
              id="imgFile"
            />
          </EditImg>
        )}
        <ProductInfos>
          <ProductName
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            disabled={!isEditing}
          ></ProductName>
          <PriceDiv>
            <strong>R$</strong>
            <ProductPrice
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              type="number"
              disabled={!isEditing}
            />
          </PriceDiv>
          <ProductID># {id}</ProductID>
        </ProductInfos>
      </ProductMain>
    </>
  );
};

export default ProductCardAdmin;
