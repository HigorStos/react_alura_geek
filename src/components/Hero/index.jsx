import hero from "@/assets/hero.png";
import heroMobile from "@/assets/heroMobile.png";
import {
  HeroBackground,
  HeroItems,
  HeroTitle,
  HeroSubtitle,
  GoConsolesButton,
} from "./styles";

const Hero = () => {
  return (
    <>
      <HeroBackground bgDesktop={hero} bgMobile={heroMobile}>
        <HeroItems>
          <HeroTitle>Dezembro Promocional</HeroTitle>
          <HeroSubtitle>Produtos selecionados com 33% de desconto</HeroSubtitle>
          <GoConsolesButton to="/consoles">Ver consoles</GoConsolesButton>
        </HeroItems>
      </HeroBackground>
    </>
  );
};

export default Hero;
