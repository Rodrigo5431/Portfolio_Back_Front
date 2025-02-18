import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Container, Icon, Icons, PositionUser, Title, User } from "./Footer.styles";
import { useDarkMode } from "../../Context/DarkContext";

export default function Footer() {
  const { darkmode } = useDarkMode();

  return (
    <Container>
      <PositionUser>
        <User>
          <Title darkmode={darkmode ? "dark-mode" : "light-mode"}>Rodrigo</Title>
          <Icons>
            <Icon href="https://github.com/Rodrigo5431">
              <FaGithub />
            </Icon>
            <Icon href="https://www.linkedin.com/in/devrodrigo-carvalho/">
              <FaLinkedin />
            </Icon>
            <Icon href="https://wa.me/5524992798292" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </Icon>
          </Icons>
        </User>
      </PositionUser>
    </Container>
  );
}
