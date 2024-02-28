import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 1136px;
  margin: 64px auto;

  @media screen and (max-width: 767px) {
    width: 328px;
    gap: 48px;
    margin: 16px auto;
  }
`;
