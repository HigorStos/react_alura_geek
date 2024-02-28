import { MainDiv, Title, Subtitle, Text, Button } from "./styles";

const NotFound = () => {
  return (
    <>
      <MainDiv>
        <Title>404</Title>
        <Subtitle>Página não encontrada</Subtitle>
        <Text>
          Desculpe, não conseguimos encontrar a página que você está procurando!
        </Text>

        <Button to="/">Voltar para home</Button>
      </MainDiv>
    </>
  );
};

export default NotFound;
