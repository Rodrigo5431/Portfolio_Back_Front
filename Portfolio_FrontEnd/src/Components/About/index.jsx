import { useContext } from "react";
import { AuthContext } from "../../Context/Auth";
import { useDarkMode } from "../../Context/DarkContext";
import { AboutMe, Container, History, Title } from "./About.styles";


export default function About() {
  const [language] = useContext(AuthContext);
  const {darkmode} = useDarkMode();
  
  return (
    <Container>
      {language ? (
        <AboutMe>
          <Title darkmode={darkmode?"dark-mode":"light-mode"} id="about">Quem Sou Eu ?</Title>
          <History darkmode={darkmode ? "dark-mode": "light-mode"}>
            Sou um Desenvolvedor Full Stack e atualmente estou estudando para me
            tornar Engenheiro de Software. <br /><br />Minha jornada na educação e na
            tecnologia tem sido intensa. Em 2019, ingressei
            no Brasas English Course para aprender Inglês e, em 2024, concluí o programa com
            sucesso, obtendo o certificado de inglês avançado. <br /><br /> Após essa conquista,
            dediquei-me à carreira de desenvolvimento. Concluí o curso de
            Programação Front-End no SENAI, seguido pelo curso de Programação
            Back-End. Além disso, estudei no SERRATEC, onde me formei como
            Desenvolvedor Full Stack e conquistei minha certificação.
          </History>
        </AboutMe>
      ) : (
        <AboutMe>
          <Title darkmode={darkmode ? "dark-mode": "light-mode"} id="about">Who am I ?</Title>
          <History darkmode={darkmode ? "dark-mode": "light-mode"}>
            I'm a Full Stack Developer currently studying to become a Software
            Engineer. <br /><br />My journey in education and technology has been extensive.
            In 2019, I enrolled at Brasas English Course to learn English, and
            in 2024, I successfully completed the program, earning an advanced
            certificate. <br /><br /> Following this achievement, I dedicated myself to
            becoming a developer. I completed a Front-End Programmer course at
            SENAI, followed by a Back-End Programmer course Additionally, I
            attended SERRATEC, where I trained as a Full Stack Developer and
            earned my certification.
          </History>
        </AboutMe>
      )}
    </Container>
  );
}