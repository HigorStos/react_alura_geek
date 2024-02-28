import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import { auth } from "@/api/firebaseConnection";
import { signOut } from "firebase/auth";

import { UserContext } from "@/context/UserContext";

import {
  HeaderStyled,
  HeaderDiv,
  HeaderMain,
  HeaderImg,
  FormStyled,
  SearchBar,
  SearchBarMobile,
  SearchButton,
  SearchButtonMobile,
  Login,
  AdminDiv,
  AdminMenu,
  Logout,
} from "./styles";

const Header = () => {
  const { isLogged, setIsLogged } = useContext(UserContext);
  const [query, setQuery] = useState("");

  const logout = async () => {
    await signOut(auth).then(() => {
      setIsLogged(false);
      localStorage.removeItem("@detailUser");
    });
  };

  return (
    <>
      <HeaderStyled>
        <HeaderDiv>
          <HeaderMain>
            <Link to="/">
              <HeaderImg src="./src/assets/logo.png" alt="Logo da AluraGeek" />
            </Link>
            <FormStyled>
              <SearchBar
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="O que deseja encontrar?"
              />
              <SearchButton to={`/search/${query}`}>
                <AiOutlineSearch size={20} />
              </SearchButton>
            </FormStyled>
          </HeaderMain>
          {isLogged ? (
            <AdminDiv>
              <AdminMenu to="/admin">Menu administrador</AdminMenu>
              <Logout onClick={logout} to="/login">
                Sair
              </Logout>
            </AdminDiv>
          ) : (
            <>
              <Login to="/login">Login</Login>
            </>
          )}
          <SearchButtonMobile to={`/search/${query}`}>
            <AiOutlineSearch size={20} />
          </SearchButtonMobile>
        </HeaderDiv>
      </HeaderStyled>
      <SearchBarMobile
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="O que deseja encontrar?"
      />
    </>
  );
};

export default Header;
