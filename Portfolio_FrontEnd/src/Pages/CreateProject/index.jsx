import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import { AuthContext } from "../../Context/Auth";
import { handleCreatePost } from "../../services/api";

import {
  BtnDiv,
  BtnPost,
  BtnPost2,
  CardBody,
  CardPost,
  Formulario,
  InputPhoto,
  Line,
  Main,
  MsgH1,
  TitleLab,
  TitleText,
} from "./CreateProject.styles";

export default function CreateProject() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [forbidden, setForbidden] = useState(true);
  const [sucess, setSucess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [language] = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [titleEnglish, setTitleEnglish] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionEnglish, setDescriptionEnglish] = useState("");
  const [link, setLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [file, setFile] = useState(null);

  const getTechArray = () => {
    return technologies
      .split(",")
      .map((tech) => tech.trim())
      .filter((tech) => tech !== "");
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    const post = JSON.stringify({
      title,
      titleEnglish,
      description,
      descriptionEnglish,
      link,
      githubLink,
      technologies: getTechArray(),
    });

    const formData = new FormData();
    formData.append(
      "projectInsert",
      new Blob([post], { type: "application/json" })
    );

    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await handleCreatePost(formData);
      if (response) {
        setSucess(true);
        setTitle("");
        setTitleEnglish("");
        setDescription("");
        setDescriptionEnglish("");
        setLink("");
        setGithubLink("");
        setFile(null);
        setLoading(false);
        setTechnologies(null)
      }
    } catch (error) {
      setErrors({ conteudo: error.response?.data || "Erro desconhecido" });
      setLoading(false);
      console.error( error);
      
    }
  };
useEffect(() =>{
  const token = localStorage.getItem("token");
  if(token){
    setForbidden(false);
  } else {
    setForbidden(true);
    setTimeout(()=>{
      navigate("/login");
    },4000)
  }
 
},[])

  return (
    <>
      {forbidden ?(
        <h1 style={{color:"red", justifySelf:"center", fontSize:"25px"}}>{language? "Você não possui permissão para acessar essa página" : "You don't have permission to access this page"}</h1>
      ):(
    <Main>
      <Header />
      <CardPost>
        <MsgH1>{language ? "Criar Projeto" : "Create Project"}</MsgH1>
        <Line />
        <CardBody>
          <Formulario onSubmit={handleSubmit}>
            <TitleLab>{language ? "Título" : "Title"}</TitleLab>
            <TitleText
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={language ? "Digite o título" : "Type the Title"}
            />

            <TitleLab>
              {language ? "Título em Inglês" : "Title in English"}
            </TitleLab>
            <TitleText
              type="text"
              value={titleEnglish}
              onChange={(e) => setTitleEnglish(e.target.value)}
              placeholder={
                language
                  ? "Digite o título em Inglês"
                  : "Type the Title in English"
              }
            />

            <TitleLab>{language ? "Descrição" : "Description"}</TitleLab>
            <TitleText
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={
                language ? "Digite a descrição" : "Type the Description"
              }
            />

            <TitleLab>
              {language ? "Descrição em Inglês" : "Description in English"}
            </TitleLab>
            <TitleText
              type="text"
              value={descriptionEnglish}
              onChange={(e) => setDescriptionEnglish(e.target.value)}
              placeholder={
                language
                  ? "Digite a descrição em Inglês"
                  : "Type the Description in English"
              }
            />

            <TitleLab>Link</TitleLab>
            <TitleText
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder={language ? "Digite o Link" : "Type the Link"}
            />

            <TitleLab>Link Github</TitleLab>
            <TitleText
              type="text"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              placeholder={
                language ? "Digite o Link do Github" : "Type the Link of GitHub"
              }
            />

            <TitleLab>
              {language
                ? "Tecnologias (separadas por vírgula)"
                : "Technologies (separated by commas)"}
            </TitleLab>
            <TitleText
              type="text"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              placeholder={
                language
                  ? "Ex: React, Node.js, MongoDB"
                  : "E.g: React, Node.js, MongoDB"
              }
            />

            <TitleLab>
              {language ? "Imagem do Projeto" : "Project Image"}
            </TitleLab>
            <InputPhoto style={{color:"#fff"}} type="file" onChange={(e) => setFile(e.target.files[0])} />

            {loading && <TitleLab>Carregando...</TitleLab>}
            {sucess && <h1 style={{color:"green", fontSize:"25px"}}>Projeto criado com sucesso!</h1>}
            <BtnDiv>
              <BtnPost2 onClick={() => navigate("/")}>
                {language ? "Voltar" : "Back"}
              </BtnPost2>
              <BtnPost type="submit">{language ? "Postar" : "Post"}</BtnPost>
            </BtnDiv>
          </Formulario>
        </CardBody>
      </CardPost>
      </Main>
    )}
    </>
  );
}
