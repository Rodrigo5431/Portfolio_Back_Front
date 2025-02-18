import { useContext } from "react";
import CardTechnology from "../CardTechnology";
import { Container } from "./Technologies.styles";
import { AuthContext } from "../../Context/Auth";

export default function Technologies() {

    const [language] = useContext(AuthContext);

    return (
        <Container id="skills">
            <CardTechnology title="Front-End" languages={["Html", "Css", "JavaScript", "React", "React Native"]} />
            <CardTechnology title="Back-End" languages={["Java", "Spring Boot", "PostgreSQL","MySQL" ]} />
            <CardTechnology title={language ? "Ferramentas" : "Tools"} languages={["Git", "Docker", "Kafka"]} />
        </Container>
    );
}
