import { Certificates, Container, Title, Button } from "./Qualifications.styles";
import Header from "../../Components/Header";
import { useContext } from "react";
import { AuthContext } from "../../Context/Auth";
import { useDarkMode } from "../../Context/DarkContext";
import CardQualification from "../../Components/CardQualification";
import fullstack from "../../assets/fullstack.jpg";
import frontend from "../../assets/frontend.jpg";
import backend from "../../assets/backend.jpg";
import ingles from "../../assets/ingles.png";
import bradesco from "../../assets/bradesco.jpg";
import ia from "../../assets/ia.jpg";
import breve from "../../assets/breve.jpg";
import { useNavigate } from "react-router-dom";

export default function Qualifications() {
  const [language] = useContext(AuthContext);
  const { darkmode } = useDarkMode();
  const navigate = useNavigate();


  return (
    <Container>
      <Header />
      <Title darkmode={darkmode ? "dark-mode" : "light-mode"}>
        {language ? "Formações" : "Qualifications"}
      </Title>
      <Certificates>
        <CardQualification
          title="Programador Front-End"
          duration="09/2024 - 11/2024"
          certificate={frontend}
          description="Curso de Qualificação Profissional em desenvolvimento web,
           com foco em hooks como useState e useEffect,
           componentização e projetos práticos individuais e em grupo."
          technologies={["Html", "Css", "JavaScript", "react"]}
        />
        <CardQualification
          title="Inglês Avançado"
          duration="12/2019 - 03/2024"
          certificate={ingles}
          description="Curso de Qualificação Profissional, onde pude aprender o desenvolvimento web hooks como useState, useEffect.
             Componentizacao. com projetos praticos solos e em grupos "
          technologies={["usa"]}
        />
        <CardQualification
          title="Crie um site simples usando HTML, CSS e JavaScript "
          duration="04/2024 - 04/2024"
          certificate={bradesco}
          description="O curso da Fundação Bradesco ensina a criar sites básicos usando HTML, CSS e JavaScript, com foco em iniciantes. Tem duração de 2 horas e cobre a estrutura, estilo e interatividade de páginas web."
          technologies={["HTML", "CSS", "javascript"]}
        />
        <CardQualification
          title="Programador Back-End"
          duration="09/2024 - 11/2024"
          certificate={backend}
          description="Curso de Qualificação Profissional, onde pude aprender o desenvolvimento de API's restful,
           com foco em Spring Boot, Hibernate e JPA."
          technologies={["java", "Spring", "mysql"]}
        />
        <CardQualification
          title="Programador Full Stack"
          duration="09/2024 - 11/2024"
          certificate={fullstack}
          description="A Residência em TIC/Software é um curso intensivo de 5 meses (770h),
             formando desenvolvedores Full Stack por meio de aulas, projetos práticos e mentorias."
          technologies={[
            "java",
            "javascript",
            "typescript",
            "react",
            "Spring",
            "Postgresql",
          ]}
        />
        <CardQualification
          title="Produtividade na era da IA Generativa"
          duration="02/2025 - 02/2025"
          certificate={ia}
          description="Capacitação em IA para otimizar produtividade e criatividade no trabalho, com foco em automação e geração de conteúdo."
          technologies={[""]}
        />
        <CardQualification
          title="Introdução a Qualidade de Software"
          duration="02/2025 - 02/2025"
          certificate={breve}
          description="O curso  aborda fundamentos da qualidade de software, Scrum, requisitos, lógica de programação,
           testes manuais e automatizados, metodologias ágeis e boas práticas."
          technologies={[""]}
        />
        <CardQualification
          title="Engenharia de Software"
          duration="02/2025 - PRESENTE"
          certificate={breve}
          description="Ensino Superior de Engenharia de Software da Estácio que profissionais para o desenvolvimento,
           análise e manutenção de sistemas, com ênfase em metodologias ágeis, programação e gestão de projetos."
          technologies={[""]}
        />
      </Certificates>
      <Button
        onClick={() => {
          navigate("/");
        }} 
        style={{  marginBottom: "100px" }}
        darkmode={darkmode ? "dark-mode" : "light-mode"}
      >
        {language ? "Voltar" : "Back"}
      </Button>
    </Container>
  );
}
