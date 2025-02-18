import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJava,
  FaJs,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import { SiSpring, SiMysql, SiPostgresql, SiTypescript } from "react-icons/si";
import EstadosUnidos from "../../assets/estadosUnidos.png";

import {
  Card,
  Certificate,
  Description,
  Error,
  LinkImage,
  TechIcon,
  Technologies,
  Time,
  Title,
} from "./CardQualification.styles";

export default function CardQualification({
  title,
  duration,
  certificate,
  description,
  technologies,
}) {
  const iconMap = {
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    javascript: <FaJs />,
    typescript: <SiTypescript />,
    react: <FaReact />,
    java: <FaJava />,
    docker: <FaDocker />,
    spring: <SiSpring />,
    mysql: <SiMysql />,
    postgresql: <SiPostgresql />,
    usa: (
      <img
        src={EstadosUnidos}
        alt="EUA"
        style={{ width: "40px", height: "30px", borderRadius: "5px" }}
      />
    ),
  };

  return (
    <Card>
      <LinkImage href={certificate}>
        <Certificate src={certificate} alt="Certificate" />
      </LinkImage>
      <Title>{title}</Title>
      <Time>{duration}</Time>
      <Description>{description}</Description>
      <Technologies>
        {Array.isArray(technologies) && technologies.length > 0 ? (
          technologies.map((tech) => (
            <TechIcon key={tech.toLowerCase()} $tech={tech.toLowerCase()}>
              {iconMap[tech.toLowerCase()] }
            </TechIcon>
          ))
        ) : (
          <Error>Tecnologias não Utilizadas</Error>
        )}
      </Technologies>
    </Card>
  );
}
