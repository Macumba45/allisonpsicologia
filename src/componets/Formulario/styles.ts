import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

export const SentMessage = styled.p`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.smallest};
`;
