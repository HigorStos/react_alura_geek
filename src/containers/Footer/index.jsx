import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import logo from "@/assets/logo.png";
import {
  FooterSection,
  FooterInfos,
  QuestionsList,
  ContactForm,
  FormTitle,
  NameInput,
  MessageArea,
  FormButton,
  DeveloperCredits,
} from "./styles";

const Footer = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitMessage = (e) => {
    e.preventDefault();

    if (name !== "" && message !== "") {
      setName("");
      setMessage("");
      toast.success("Mensagem enviada com sucesso!");
    } else {
      toast.warn("Preencha todas as informações do formulário.");
    }
  };

  return (
    <>
      <FooterSection>
        <FooterInfos>
          <Link to="/">
            <img src={logo} alt="Logo da AluraGeek" />
          </Link>
          <QuestionsList>
            <li>
              <a href="#">Quem somos nós</a>
            </li>
            <li>
              <a href="#">Política de privacidade</a>
            </li>
            <li>
              <a href="#">Programa fidelidade</a>
            </li>
            <li>
              <a href="#">Nossas lojas</a>
            </li>
            <li>
              <a href="#">Quero ser franqueado</a>
            </li>
            <li>
              <a href="#">Anuncie aqui</a>
            </li>
          </QuestionsList>
          <ContactForm onSubmit={submitMessage}>
            <FormTitle>Fale conosco</FormTitle>
            <NameInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nome"
            />
            <MessageArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escreva sua mensagem"
            ></MessageArea>
            <FormButton type="submit">Enviar mensagem</FormButton>
          </ContactForm>
        </FooterInfos>
      </FooterSection>
      <DeveloperCredits>
        <a href="https://github.com/HigorStos" target="_blank">
          <p>&copy; Higor Santos - 2024</p>
        </a>
      </DeveloperCredits>
    </>
  );
};

export default Footer;
