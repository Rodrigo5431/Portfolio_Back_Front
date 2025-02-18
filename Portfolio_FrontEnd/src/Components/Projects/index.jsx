import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Auth";
import { useDarkMode } from "../../Context/DarkContext";
import { handlePosts } from "../../services/api";
import CardProject from "../CardProject";
import {
  Container,
  Error,
  LoadMoreButton,
  Loading,
  ProjectList,
  Title,
} from "./Projects.styles";

export default function Technologies() {
  const [language] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [error, setError] = useState(false);
  const {darkmode} = useDarkMode();

  async function fetchPosts() {
    setLoading(true);
    try {
      const data = await handlePosts();
      if (Array.isArray(data)) {
        setLoading(false);
        setPosts(data);
        setError(false);
      } else {
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      setError(true);
    }
    
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  

  return (
    <Container id="projects">
      <Title darkmode={darkmode ? "dark-mode" : "light-mode"}>{language ? "<Projetos/>" : "<Projects/>"}</Title>
      {loading && (
        <Loading darkmode={darkmode ? "dark-mode" : "light-mode"}>Carregando...</Loading>
      )}
      {error ? (
        <Error>Não foi possível conectar à API</Error>
      ) : (
        <>
          <ProjectList>
            {posts.slice(0, visibleCount).map((post, index) => (
              <CardProject key={index} post={post} />
            ))}
          </ProjectList>

          {posts.length > visibleCount && (
            <LoadMoreButton onClick={() => setVisibleCount(visibleCount + 6)}>
              Ver mais
            </LoadMoreButton>
          )}
        </>
      )}
    </Container>
  );
}
