import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled.div``;

export const TitleContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 900;
  text-align: center;
  margin-left: 2rem;
  margin-right: 2rem;
  line-height: 6rem;

  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 2rem;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
  line-height: 5rem;

  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 2rem;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
`;

export const VideoUrl = styled.iframe`
  width: 80%;
  height: 700px;
  object-fit: cover;
  border: 10px solid #F1CED6;

  @media screen and (max-width: 600px) {
    width: 350px;
    height: 400px;

  }
`;

export const Span = styled(motion.span)`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  width: 90%;
  margin: 0 auto;
  text-align: center;
  margin-top: 2rem;
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
    line-height: 2.5rem;
  }
`;

export const SpanBold = styled(motion.span)`

font-weight: 800;
font-family: ${({ theme }) => theme.fonts.poppins};
font-size: 4rem;
color: ${({ theme }) => theme.colors.primaryLight};
text-align: center;

@media screen and (max-width: 600px) {
    font-size: 2rem;
    line-height: 2rem;
  }





`

export const SpanBoldContainer = styled.div`

display: flex;
justify-content: center;
margin-bottom: 5rem;


`
