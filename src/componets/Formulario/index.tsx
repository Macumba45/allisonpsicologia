import { FC, memo, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { makeStyles } from "@material-ui/styles";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { MainContainer, SentMessage } from "./styles";

const useStyles = makeStyles({
  root: {
    marginTop: "2rem",
  },
});

const FormContact: FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  const classes = useStyles();
  const blinkAnimation = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const navigate = useNavigate();

  const options = [
    { value: "Facebook", label: "Facebook" },
    { value: "Instagram", label: "Instagram" },
    { value: "Tiktok", label: "Tiktok" },
    { value: "Google", label: "Google" },
    { value: "Youtube", label: "Youtube" },
    { value: "A friend/coworker", label: "A friend/coworker" },
    { value: "Ads", label: "Ads" },
    { value: "LinkedIn", label: "LinkedIn" },
    { value: "Podcast", label: "Podcast" },
    { value: "Flip Your Future Book", label: "Flip Your Future Book" },
    { value: "Other", label: "Other" },
  ];

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     const form = event.currentTarget;

  //     try {
  //         const response = await fetch(form.action, {
  //             method: "POST",
  //             headers: {
  //                 Accept: "application/json",
  //             },
  //             body: new FormData(form),
  //         });
  //         if (response.ok) {
  //             setModalOpen(true);
  //         } else {
  //             throw new Error(response.statusText);
  //         }
  //     } catch (error) {
  //         alert(error);
  //     }
  // };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setModalOpen(true);

    const data = {
      name: e.target.Nombre.value,
      apellidos: e.target.Apellidos.value,
      email: e.target._replyto.value,
      phoneNumber: e.target["Número de móvil"].value,
      comoNosConociste: e.target["¿Cómo nos has conocido?"].value,
    };

    const response = await fetch(
      "https://backend-email.vercel.app/api/sendemail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      setModalOpen(true);
    }
    const responseData = await response.json();
    console.log(data);
    console.log(responseData);
  };

  const handleClose = () => {
    setModalOpen(false);
    navigate("/contacto");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      setIsVisible((prevIsVisible) => !prevIsVisible);
    }, 500);

    if (counter >= 6) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [counter, isVisible]);

  return (
    <>
      <motion.div
        variants={blinkAnimation}
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
      >
        <Typography
          style={{
            marginTop: "2rem",
            fontSize: "2rem",
            display: "flex",
            justifyContent: "center",
            fontFamily: "poppins",
            textAlign: "center",
          }}
          variant="h6"
        >
          ¿Preparado para ganar 3000€ a 5000€?
        </Typography>
      </motion.div>
      <MainContainer>
        <form
          // action="https://formspree.io/f/xbjewjlk"
          // method="POST"
          onSubmit={sendEmail}
        >
          <Grid
            container
            direction="column"
            spacing={2}
            className={classes.root}
          >
            <Grid style={{ fontFamily: "poppins" }} item>
              <Typography style={{ fontFamily: "poppins" }} variant="h6">
                Contáctame
              </Typography>
            </Grid>
            <Grid style={{ fontFamily: "poppins" }} item>
              <TextField
                label="Nombre"
                name="Nombre"
                variant="outlined"
                required
                type="text"
                fullWidth
              />
            </Grid>
            <Grid style={{ fontFamily: "poppins" }} item>
              <TextField
                label="Apellidos"
                variant="outlined"
                name="Apellidos"
                required
                type="text"
                fullWidth
              />
            </Grid>
            <Grid style={{ fontFamily: "poppins" }} item>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                name="_replyto"
                required
                fullWidth
              />
            </Grid>
            <Grid style={{ fontFamily: "poppins" }} item>
              <TextField
                label="Número de móvil"
                variant="outlined"
                name="Número de móvil"
                required
                fullWidth
                type="number"
              />
            </Grid>
            <Grid style={{ fontFamily: "poppins" }} item>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="select-label">
                  ¿Cómo nos has conocido?
                </InputLabel>
                <Select
                  labelId="select-label"
                  name="¿Cómo nos has conocido?"
                  label="¿Cómo nos has conocido?"
                  required
                  defaultValue={"Facebook"}
                >
                  {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <Button
                type="submit"
                variant="contained"
                style={{
                  fontFamily: "poppins",
                  backgroundColor: "#E1226B",
                  color: "white",
                  width: "400px",
                }}
                startIcon={<SendIcon />}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
        <Dialog open={modalOpen} onClose={handleClose}>
          <DialogTitle>¡Mensaje enviado!</DialogTitle>
          <DialogContent>
            <SentMessage>Tu mensaje ha sido enviado con éxito.</SentMessage>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cerrar</Button>
          </DialogActions>
        </Dialog>
      </MainContainer>
    </>
  );
};

export default memo(FormContact);
