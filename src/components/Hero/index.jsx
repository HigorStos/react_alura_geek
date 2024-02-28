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
      <HeroBackground
        bgDesktop="./src/assets/hero.png"
        bgMobile="./src/assets/heroMobile.png"
      >
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
