import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import rodrigo from "../../assets/rodrigo.jpg";
import About from "../../Components/About";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Line from "../../Components/Line";
import Projects from "../../Components/Projects";
import Technologies from "../../Components/Technologies";
import { AuthContext } from "../../Context/Auth";
import { useDarkMode } from "../../Context/DarkContext";
import {
  Apresentation,
  ButtonDownload,
  Container,
  ImageMe,
  LinkDownload,
  Title,
} from "./Home.styles";
import { useNavigate } from "react-router-dom";
import Contact from "../../Components/Contact";

export default function Home() {
  const [language] = useContext(AuthContext);
  const { darkmode } = useDarkMode();

  return (
    <Container>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {language ? (
          <Apresentation>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Title darkmode={darkmode ? "dark-mode" : "light-mode"}>
                Rodrigo <br />
                Carvalho Lima <br />
                Programador Full Stack
                <br />
                <LinkDownload
                  href="/archive/curriculo-RodrigoCarvalhoLima.pdf"
                  download
                >
                  <ButtonDownload
                    darkmode={darkmode ? "dark-mode" : "light-mode"}
                  >
                    Baixar CV
                  </ButtonDownload>
                </LinkDownload>
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <ImageMe
                src={rodrigo}
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </Apresentation>
        ) : (
          <Apresentation>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Title darkmode={darkmode ? "dark-mode" : "light-mode"}>
                Rodrigo <br />
                Carvalho Lima <br />
                Full Stack Developer <br />
                <LinkDownload
                  href="/archive/curriculo-RodrigoCarvalhoLima.pdf"
                  download
                >
                  <ButtonDownload
                    darkmode={darkmode ? "dark-mode" : "light-mode"}
                  >
                    Download CV
                  </ButtonDownload>
                </LinkDownload>
              </Title>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
               <ImageMe
                src={rodrigo}
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </Apresentation>
        )}
      </motion.div>
      <Line />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Technologies />
      </motion.div>
      <Line />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>
      <Line />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>
      <Line />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
      <Footer />
    </Container>
  );
}
