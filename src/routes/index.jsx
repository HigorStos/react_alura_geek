import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserProvider from "@/context/UserContext";

import Private from "@/routes/Private";

import Header from "@/containers/Header";
import Footer from "@/containers/Footer";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Admin from "@/pages/Admin";
import New from "@/pages/New";
import Product from "@/pages/Product";
import Consoles from "@/pages/Consoles";
import StarWars from "@/pages/StarWars";
import Geek from "@/pages/Geek";
import Search from "@/pages/Search";
import NotFound from "@/pages/NotFound";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/consoles" element={<Consoles />} />
          <Route path="/star_wars" element={<StarWars />} />
          <Route path="/geek" element={<Geek />} />
          <Route path="/search/:q" element={<Search />} />

          <Route
            path="/admin"
            element={
              <Private>
                <Admin />
              </Private>
            }
          />
          <Route
            path="/new"
            element={
              <Private>
                <New />
              </Private>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
};

export default RoutesApp;
