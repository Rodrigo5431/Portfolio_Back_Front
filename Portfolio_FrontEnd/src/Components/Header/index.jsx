import { useContext, useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Auth";
import { useDarkMode } from "../../Context/DarkContext";
import brasil from "../../assets/brasil.png";
import eua from "../../assets/estadosUnidos.png";
import {
  ButtonCreateProject,
  Container,
  DarkModeSwitch,
  Flag,
  ListComponents,
  ListNavigation,
  Menu,
  MenuBurguer,
  MenuIcon,
  MenuLine,
  Navigation,
  NavigationSection,
  Title,
} from "./Header.styles";

export default function Header() {
  const { darkmode, toggleDarkMode } = useDarkMode();
  const [hamburguer, setHamburguer] = useState(false);
  const [token, setToken] = useState(false);
  const [language, setLanguage] = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLocateChange = (locate) => {
    if (location.pathname === "/") {
      const section = document.getElementById(locate);
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(locate);
        section.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    }
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <Container>
      <NavigationSection>
        <Title darkmode={darkmode ? "dark-mode" : "light-mode"}>
          &lt;Rodrigo/&gt;
        </Title>
        <Navigation>
          <ListNavigation>
            <Menu>
              {token && (
                <ButtonCreateProject
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                  onClick={() => {
                    navigate("/createProject");
                  }}
                >
                  {language ? "Criar Projeto" : "Create Project"}
                </ButtonCreateProject>
              )}
              <Flag
                src={brasil}
                onClick={() => setLanguage(true)}
                style={{ opacity: language ? 1 : 0.5, cursor: "pointer" }}
              />
              <Flag
                src={eua}
                onClick={() => setLanguage(false)}
                style={{ opacity: !language ? 1 : 0.5, cursor: "pointer" }}
              />
              {darkmode ? (
                <FiMoon
                  style={{ width: "30px", height: "30px", color: "#fff" }}
                />
              ) : (
                <FiSun
                  style={{
                    color: darkmode ? "black" : "black",
                    width: "30px",
                    height: "30px",
                  }}
                />
              )}
              <DarkModeSwitch
                darkmode={darkmode ? "dark-mode" : "light-mode"}
                onClick={toggleDarkMode}
              ></DarkModeSwitch>
              {language ? (
                <Menu>
                  <div onClick={() => navigate('/qualification')}>
                    <ListComponents
                      darkmode={darkmode ? "dark-mode" : "light-mode"}
                    >
                      Formações
                    </ListComponents>
                  </div>
                  <div onClick={() => handleLocateChange("skills")}>
                    <ListComponents
                      darkmode={darkmode ? "dark-mode" : "light-mode"}
                    >
                      Habilidades
                    </ListComponents>
                  </div>
                  <div onClick={() => handleLocateChange("projects")}>
                    <ListComponents
                      darkmode={darkmode ? "dark-mode" : "light-mode"}
                    >
                      Projetos
                    </ListComponents>
                  </div>
                  <div onClick={() => handleLocateChange("about")}>
                    <ListComponents
                      darkmode={darkmode ? "dark-mode" : "light-mode"}
                    >
                      Sobre Mim
                    </ListComponents>
                  </div>
                </Menu>
              ) : (
                <Menu>
                  <div onClick={() => navigate('/qualification')}>
                    <ListComponents
                      darkmode={darkmode ? "dark-mode" : "light-mode"}
                    >
                      Qualifications
                    </ListComponents>
                  </div>
                  <div onClick={() => handleLocateChange("skills")}>
                    <ListComponents
                      darkmode={darkmode ? "dark-mode" : "light-mode"}
                    >
                      Skills
                    </ListComponents>
                  </div>
                  <div onClick={() => handleLocateChange("projects")}>
                    <ListComponents
                      darkmode={darkmode ? "dark-mode" : "light-mode"}
                    >
                      Projects
                    </ListComponents>
                  </div>
                  <div onClick={() => handleLocateChange("about")}>
                    <ListComponents
                      darkmode={darkmode ? "dark-mode" : "light-mode"}
                    >
                      About Me
                    </ListComponents>
                  </div>
                </Menu>
              )}
            </Menu>
            <MenuIcon onClick={() => setHamburguer(!hamburguer)}>
              <MenuLine darkmode={darkmode ? "dark-mode" : "light-mode"}></MenuLine>
              <MenuLine darkmode={darkmode ? "dark-mode" : "light-mode"}></MenuLine>
              <MenuLine darkmode={darkmode ? "dark-mode" : "light-mode"}></MenuLine>
            </MenuIcon>
          </ListNavigation>
        </Navigation>
      </NavigationSection>
      {hamburguer && (
        <MenuBurguer darkmode={darkmode ? "dark-mode" : "light-mode"}>
          {language ? (
            <MenuBurguer darkmode={darkmode ? "dark-mode" : "light-mode"}>
              <div style={{ marginLeft: "25px" }}>
                {darkmode ? (
                  <FiSun
                    style={{ width: "30px", height: "30px", color: "#fff" }}
                  />
                ) : (
                  <FiMoon style={{ width: "30px", height: "30px" }} />
                )}
                <DarkModeSwitch
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                  onClick={toggleDarkMode}
                ></DarkModeSwitch>
                <Flag
                  src={brasil}
                  onClick={() => setLanguage(true)}
                  style={{ opacity: language ? 1 : 0.5, cursor: "pointer" }}
                />
                <Flag
                  src={eua}
                  onClick={() => setLanguage(false)}
                  style={{ opacity: !language ? 1 : 0.5, cursor: "pointer" }}
                />
              </div>
              <div onClick={() => navigate('/qualification')}>
                <ListComponents
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                >
                  Formações
                </ListComponents>
              </div>
              <div onClick={() => handleLocateChange("skills")}>
                <ListComponents
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                >
                  Hablidades
                </ListComponents>
              </div>
              <div onClick={() => handleLocateChange("projects")}>
                <ListComponents
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                >
                  Projetos
                </ListComponents>
              </div>
              <div onClick={() => handleLocateChange("about")}>
                <ListComponents
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                >
                  Sobre Mim
                </ListComponents>
              </div>
            </MenuBurguer>
          ) : (
            <MenuBurguer darkmode={darkmode ? "dark-mode" : "light-mode"}>
              <div style={{ marginLeft: "25px" }}>
                {darkmode ? (
                  <FiSun
                    style={{ width: "30px", height: "30px", color: "#fff" }}
                  />
                ) : (
                  <FiMoon style={{ width: "30px", height: "30px" }} />
                )}
                <DarkModeSwitch
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                  onClick={toggleDarkMode}
                ></DarkModeSwitch>
                <Flag
                  src={brasil}
                  onClick={() => setLanguage(true)}
                  style={{ opacity: language ? 1 : 0.5, cursor: "pointer" }}
                />
                <Flag
                  src={eua}
                  onClick={() => setLanguage(false)}
                  style={{ opacity: !language ? 1 : 0.5, cursor: "pointer" }}
                />
              </div>
              <div onClick={() => navigate('/qualification')}>
                <ListComponents
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                >
                  Qualifications
                </ListComponents>
              </div>
              <div onClick={() => handleLocateChange("skills")}>
                <ListComponents
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                >
                  Skills
                </ListComponents>
              </div>
              <div onClick={() => handleLocateChange("projects")}>
                <ListComponents
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                >
                  Projects
                </ListComponents>
              </div>
              <div onClick={() => handleLocateChange("about")}>
                <ListComponents
                  darkmode={darkmode ? "dark-mode" : "light-mode"}
                >
                  About Me
                </ListComponents>
              </div>
            </MenuBurguer>
          )}
        </MenuBurguer>
      )}
    </Container>
  );
}
