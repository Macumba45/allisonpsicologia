import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: sticky;
  top: 0; */
`;

export const NavBarContent = styled.div`
  /* background-color: ${({ theme }) => theme.colors.tertiary}; */
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
`;
