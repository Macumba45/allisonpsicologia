import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
`;

export const TtitleFooter = styled.div`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSizes.small};
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;
`;

export const LogosRRSS = styled.a`
  color: white;
  margin: 1rem 1rem 2rem 1rem;
`;

export const Copyrights = styled.div`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const WebLink = styled.a`
  color: ${({ theme }) => theme.colors.tertiary};
  text-decoration: none;
`;


