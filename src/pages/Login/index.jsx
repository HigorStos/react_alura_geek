import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/api/firebaseConnection";

import { UserContext } from "@/context/UserContext";

import {
  LoginForm,
  LoginTitle,
  LoginInput,
  LoginButton,
  GoRegister,
  GoRegisterText,
  GoRegisterButton,
} from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLogged, setIsLogged } = useContext(UserContext);

  const login = async (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          <Navigate to="/admin" />;
          setIsLogged(true);
          toast.success("Login efetuado com sucesso!");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-credential":
              toast.error("Informações inválidas.");
              break;
          }
        });
    } else {
      toast.warn("Preencha todos os campos!");
    }
  };

  return (
    <>
      {isLogged ? (
        <Navigate to="/admin" />
      ) : (
        <LoginForm onSubmit={login}>
          <LoginTitle>Iniciar sessão</LoginTitle>
          <LoginInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Escreva seu e-mail"
          />
          <LoginInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Escreva sua senha"
          />
          <LoginButton type="submit">Entrar</LoginButton>
          <GoRegister>
            <GoRegisterText>Não possui uma conta?</GoRegisterText>
            <GoRegisterButton to="/register">Cadastre-se</GoRegisterButton>
          </GoRegister>
        </LoginForm>
      )}
    </>
  );
};

export default Login;
