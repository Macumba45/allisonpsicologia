import { FC, memo } from "react";
import NavBar from "../../componets/NavBar";
import Video from "../../componets/Video";
import { LandingContainer } from "./styles";
import Footer from "../../componets/Footer";

const Landing: FC = () => {
  return (
    <LandingContainer>
      <NavBar />
      <Video />
      <Footer />
    </LandingContainer>
  );
};

export default memo(Landing);
