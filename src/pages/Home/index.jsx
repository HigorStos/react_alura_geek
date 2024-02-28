import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";

import { MainContainer } from "./styles";

const Home = () => {
  return (
    <>
      <Hero />
      <MainContainer>
        <ProductSection
          name="Star Wars"
          category="star_wars"
          page="star_wars"
        />
        <ProductSection name="Consoles" category="console" page="consoles" />
        <ProductSection name="Geek - Diversos" category="geek" page="geek" />
      </MainContainer>
    </>
  );
};

export default Home;
