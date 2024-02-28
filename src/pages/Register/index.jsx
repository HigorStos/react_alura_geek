import { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/api/firebaseConnection";

import {
  RegisterForm,
  RegisterTitle,
  RegisterInput,
  RegisterButton,
  GoLogin,
  GoLoginText,
  GoLoginButton,
} from "./styles";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();

    if ((email !== "") & (password !== "")) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          <Navigate to="/login" />;
          toast.success("Administrador cadastrado com sucesso!");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/weak-password":
              toast.error("Escolha uma senha mais segura.");
              break;
            case "auth/email-already-in-use":
              toast.error("O e-mail informado já está em uso.");
              break;
          }
        });
    } else {
      toast.warn("Preencha todos os campos!");
    }
  };

  return (
    <>
      <RegisterForm onSubmit={register}>
        <RegisterTitle>Criar sua conta</RegisterTitle>
        <RegisterInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Escreva seu e-mail"
        />
        <RegisterInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Escreva sua senha"
        />
        <RegisterButton type="submit">Cadastre-se</RegisterButton>
        <GoLogin>
          <GoLoginText>Tem uma conta?</GoLoginText>
          <GoLoginButton to="/login">Conecte-se</GoLoginButton>
        </GoLogin>
      </RegisterForm>
    </>
  );
};

export default Register;
