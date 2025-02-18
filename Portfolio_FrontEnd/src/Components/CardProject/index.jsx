import { useNavigate } from "react-router-dom";
import { Container, ImageProject, TitleProject } from "./CardProject.styles";
import { useEffect } from "react";
import { useDarkMode } from "../../Context/DarkContext";

export default function CardProject({ post }) {
  const { darkmode } = useDarkMode();
  const navigate = useNavigate();

  function handleProject(id) {
    navigate(`/project/${id}`, { state: { project: post } });
  }
  useEffect(() => {
    console.log("posts" + post.image);
  }, []);

  return (
    <Container
      onClick={() => {
        handleProject(post.id);
      }}
    >
      <ImageProject src={post.image}></ImageProject>
      <TitleProject darkmode={darkmode ? "dark-mode" : "light-mode"}>
        {post.title}
      </TitleProject>
    </Container>
  );
}
