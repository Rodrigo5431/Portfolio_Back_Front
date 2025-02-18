import { styled } from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 250px;
height: 200px;
border-radius: 25px;
align-items: center;
justify-content: center;
gap: 10px;
cursor: pointer;
`

export const ImageProject = styled.img`
width: 200px;
height: 150px;
border-radius: 25px;
`

export const TitleProject = styled.h1`
font-size: 1rem;
color: ${({ darkmode }) => (darkmode === "dark-mode" ? "#fff" : "#000")};

`