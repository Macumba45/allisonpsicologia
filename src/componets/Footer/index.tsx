import { FC, memo, useCallback } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { MainContainer, Copyrights, WebLink } from "./style";

const Footer: FC = () => {
  const navigate = useNavigate();

  const contactMe = useCallback(() => {
    navigate("/contacto");
  }, [navigate]);

  return (
    <MainContainer>
      {/* <TtitleFooter>Contáctame para más información:</TtitleFooter> */}
      <Button
        href="https://calendly.com/allisonpsicologia/llamada"
        // onClick={contactMe}
        target="blank"
        sx={{
          fontFamily: "poppins",
          width: "350px",
          height: "50px",
          margin: "2rem auto",
          backgroundColor: "#FFF8EF",
          color: "#70402E",
          "&:hover": { backgroundColor: "#F1CED6", color: "#70402E" },
        }}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Agenda tu Consultoría GRATUITA
      </Button>
      <Copyrights>
        <WebLink target="blank" href="https://allisonpsicologia.com/">allisonpsicologia.com</WebLink>
        .&nbsp;Copyright 2023.&nbsp;All Rights Reserved.
      </Copyrights>
    </MainContainer>
  );
};

export default memo(Footer);
