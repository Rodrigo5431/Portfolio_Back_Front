import { ExternalLink, Github } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import {
  FaCss3,
  FaDocker,
  FaHtml5,
  FaJava,
  FaJs,
  FaLeaf,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import { AuthContext } from "../../Context/Auth";
import { useDarkMode } from "../../Context/DarkContext";
import { handleDelete } from "../../services/api";
import {
  Button,
  ButtonsConfirmation,
  ConfirmationArea,
  Container,
  Description,
  ImageProject,
  InformationsArea,
  LinkGithub,
  LinkProject,
  LinksArea,
  ProjectInformations,
  Technologies,
  TechnologiesArea,
  TechnologyItem,
  TitleProject,
  TitleTechnology,
} from "./ProjectDetails.styles";

export default function ProjectDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState();
  const [confirmation, setConfirmation] = useState(false);
  const [message, setMessage] = useState(false);
  const [project, setProject] = useState(location.state.project || {});
  const [id, setId] = useState(project.id);
  const [language] = useContext(AuthContext);
  const { darkmode } = useDarkMode();

  const techIcons = {
    Java: <FaJava size={20} color="#f89820" />,
    Html: <FaHtml5 size={20} color="#E34F26" />,  
    Css: <FaCss3 size={20} color="#1572B6" />,   
    "Spring Boot": <FaLeaf size={20} color="#6db33f" />,
    React: <FaReact size={20} color="#61DBFB" />,
    JavaScript: <FaJs size={20} color="#f7df1e" />,
    Docker: <FaDocker size={20} color="#2496ED" />,
    TypeScript: <SiTypescript size={20} color="#3178C6" />,
    Python: <FaPython size={20} color="#306998" />,
  };
  

  const techList = Array.isArray(project.technologies)
    ? project.technologies
    : typeof project.technologies === "string";

  function handleToken() {
    setToken(localStorage.getItem("token"));
  }
  useEffect(() => {
    handleToken();
  }, []);

  const handleDeleteProject = async () => {
    try {
      const response = await handleDelete(id);
      if (response.status === 200) {
        navigate("/");
      } else {
        console.error("Failed to delete project");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Header />
      {token && (
        <>
          <Button
            onClick={() =>
              navigate(`/updateproject/${project.id}`, {
                state: { project: project },
              })
            }
            darkmode={darkmode ? "dark-mode" : "light-mode"}
          >
            {language ? "Atualizar Projeto" : "Update Project"}
          </Button>
          <Button
            onClick={() => {
              setConfirmation(true);
            }}
            darkmode={darkmode ? "dark-mode" : "light-mode"}
          >
            Deletar
          </Button>
          {confirmation && (
            <ConfirmationArea>
              <Description>Deseja excluir?</Description>
              <ButtonsConfirmation>
                <Button darkmode={darkmode ? "dark-mode" : "light-mode"}
                  onClick={() => {
                    setConfirmation(false);
                  }}
                >
                  {language ? "Não" : "No"}
                </Button>
                <Button darkmode={darkmode ? "dark-mode" : "light-mode"}
                  onClick={() => {
                    handleDeleteProject();
                  }}
                >
                  {language ? "Sim" : "Yes"}
                </Button>
              </ButtonsConfirmation>
            </ConfirmationArea>
          )}
        </>
      )}
      <ProjectInformations>
        <ImageProject
          src={project.image}
          alt={language ? project.title : project.titleEnglish}
        />
        <InformationsArea>
          <TitleProject darkmode={darkmode ? "dark-mode" : "light-mode"}>
            {language ? project.title : project.titleEnglish}
          </TitleProject>
          <Description>{project.description}</Description>

          <TechnologiesArea>
            {language ? (
              <TitleTechnology darkmode={darkmode ? "dark-mode" : "light-mode"}>
                Tecnologias Usadas
              </TitleTechnology>
            ) : (
              <TitleTechnology darkmode={darkmode ? "dark-mode" : "light-mode"}>
                Technologies Used
              </TitleTechnology>
            )}

            <Technologies>
              {techList.length > 0 ? (
                techList.map((tech, index) => (
                  <TechnologyItem key={index}>
                    {techIcons[tech] || "🛠"} {tech}
                  </TechnologyItem>
                ))
              ) : (
                <p style={{ color: "#bbb" }}>Nenhuma tecnologia informada.</p>
              )}
            </Technologies>
          </TechnologiesArea>

          <LinksArea>
            <LinkProject href={project.link} target="_blank">
              <ExternalLink size={20} /> Acessar Projeto
            </LinkProject>
            <LinkGithub href={project.githubLink} target="_blank">
              <Github size={20} /> GitHub
            </LinkGithub>
          </LinksArea>
        </InformationsArea>
      </ProjectInformations>
      <Button onClick={()=>{navigate("/")}} style={{marginTop:"100px", marginBottom:"150px"}} darkmode={darkmode ? "dark-mode" : "light-mode"}>{language?"Voltar": "Back"}</Button>
    </Container>
  );
}
