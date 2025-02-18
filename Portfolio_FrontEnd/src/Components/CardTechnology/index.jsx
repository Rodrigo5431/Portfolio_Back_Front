import { useDarkMode } from "../../Context/DarkContext";
import {
  Container,
  Separation,
  TechnologyItem,
  TechnologyList,
  Title,
} from "./CardTechnology.styles";

export default function CardTechnology({ title, languages = [] }) {
  const { darkmode } = useDarkMode();
  return (
    <Container darkmode={darkmode ? "dark-mode" : "light-mode"}>
      <Title darkmode={darkmode ? "dark-mode" : "light-mode"}>{title}</Title>
      <Separation darkmode={darkmode ? "dark-mode" : "light-mode"}></Separation>
      <TechnologyList darkmode={darkmode ? "dark-mode" : "light-mode"}>
        {languages.map((lang, index) => (
          <TechnologyItem
            darkmode={darkmode ? "dark-mode" : "light-mode"}
            key={index}
          >
            {lang}
          </TechnologyItem>
        ))}
      </TechnologyList>
    </Container>
  );
}
