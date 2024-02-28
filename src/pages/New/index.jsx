import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import productsApi from "@/api/productsApi";

import {
  FormStyled,
  FormTitle,
  FormInput,
  FormImgDiv,
  FormImgFileLabel,
  FormImgFileIcon,
  FormImgFileInput,
  FormTextArea,
  FormButton,
  FormSelector,
} from "./styles";

export const New = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("star_wars");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const getId = async () => {
      await productsApi.get("/products").then((res) => {
        const lastProductId = res.data[res.data.length - 1].id;
        const newId = (parseInt(lastProductId) + 1).toString();
        setId(newId);
      });
    };

    getId();
  }, []);

  const uploadProduct = async (e) => {
    e.preventDefault();

    if (name !== "" && price !== "" && description !== "") {
      await productsApi
        .post("/products", {
          id: id,
          name: name,
          img_url: imgUrl,
          price: price,
          description: description,
          category: category,
        })
        .then(() => {
          toast.success("Produto adicionado com sucesso!");
        })
        .catch(() => {
          toast.error("Erro ao adicionar o produto.");
        });

      setName("");
      setImgUrl("");
      setPrice("");
      setDescription("");
      setCategory("");
    } else {
      toast.warn("Preencha todas as informações!");
    }
  };

  const uploadImgFile = (e) => {
    const data = new FileReader();
    data.addEventListener("load", () => {
      setImgUrl(data.result);
    });
    data.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <FormStyled onSubmit={uploadProduct}>
        <FormTitle>Adicionar novo produto</FormTitle>
        <FormImgDiv>
          <FormInput
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            type="text"
            placeholder="URL da imagem"
          />
          <span>ou</span>
          <FormImgFileLabel htmlFor="imgFile">
            <FormImgFileIcon /> Carregue uma imagem
          </FormImgFileLabel>
          <FormImgFileInput
            onChange={uploadImgFile}
            type="file"
            name="imgFile"
            id="imgFile"
          />
        </FormImgDiv>
        <FormSelector
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="star_wars" default>
            Star Wars
          </option>
          <option value="console">Console</option>
          <option value="geek">Geek</option>
        </FormSelector>
        <FormInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nome do produto"
        />
        <FormInput
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="Preço do produto"
        />
        <FormTextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição do produto"
        ></FormTextArea>
        <FormButton type="submit">Adicionar produto</FormButton>
      </FormStyled>
    </>
  );
};

export default New;
