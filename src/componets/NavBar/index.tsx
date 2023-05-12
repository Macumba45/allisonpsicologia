import { FC, memo } from "react";
import { MainContainer, NavBarContent } from "./style";

const NavBar: FC = () => {
  return (
    <MainContainer>
      <NavBarContent>ALLISON PSICOLOGÍA</NavBarContent>
    </MainContainer>
  );
};

export default memo(NavBar);
