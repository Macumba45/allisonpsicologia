import { FC, memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MainContainer,
  TitleContainer,
  VideoContainer,
  VideoUrl,
  Span,
  SpanBold,
  SpanBoldContainer,
} from "./styles";

const video = require('../../videos/myvideo1.mp4')

const Video: FC = () => {
  const titleVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.05, // retrasa el inicio de la animación medio segundo
        staggerChildren: 0.05, // retrasa el inicio de cada letra 0.1 segundos
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50, // desplaza cada letra hacia abajo mientras está oculta
    },
    visible: {
      opacity: 1,
      y: 0, // devuelve cada letra a su posición original
    },
  };

  const [shouldScale, setShouldScale] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldScale(true);
      setTimeout(() => {
        setShouldScale(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MainContainer>
      <TitleContainer>
        <motion.div variants={titleVariants} initial="hidden" animate="visible">
          <Span variants={letterVariants}>Te</Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}>revelo</Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}>el</Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}>método</Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}>para</Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}>sentirte</Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}>mejor</Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}><SpanBold>contigo</SpanBold></Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}><SpanBold>mism@</SpanBold></Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}>y</Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}>poder</Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}>disfrutar</Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}>de</Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}>la</Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}>vida</Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}>que</Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}>realmente</Span>
          <Span variants={letterVariants}> </Span>
          <Span variants={letterVariants}>mereces</Span>

        </motion.div>
      </TitleContainer>
      <SpanBoldContainer>
        <AnimatePresence>
          <SpanBold
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              color: "#70402E",
              scale: shouldScale ? 1.1 : 1,
            }}
            transition={{ duration: 1.5 }}
          >
            ¡EN 8 SEMANAS!
          </SpanBold>
        </AnimatePresence>
      </SpanBoldContainer>

      <VideoContainer>
        <VideoUrl src={video} preload='auto' poster="https://i.postimg.cc/nVdRc8Rc/allison.jpg" style={{ height: '600px' }} controls playsInline />
      </VideoContainer>
    </MainContainer>
  );
};

export default memo(Video);
