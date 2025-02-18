import { styled } from "styled-components";
import "@fontsource/inter/300.css"


export const Card = styled.div`
display: flex;
flex-direction: column;
width: 230px;
height: 650px;
border-radius: 25px;
padding: 10px;
background-color: #082836;
transition: all 0.3s ease-in-out;

&:hover {
    transform: scale(1.1);
  }

`
export const Certificate = styled.img`
  width: 230px;
  height: 200px;
  border-radius: 25px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
  }
`;
export const LinkImage = styled.a`
  width: 230px;
  height: 200px;
  border-radius: 25px;
  margin-bottom: 15px;
`;

export const Title = styled.h1`
font-size: 1.5rem;
color: #fff;
margin: 0;
font-family: 'Inter', sans-serif;
font-weight: 600;
`
export const Time = styled.h3`
color: #fff;
font-size: 1rem;
font-weight: 100;
`
export const Description = styled.h3`
border-radius: 25px;
color: #fff;
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 1.1rem;
`
export const Technologies = styled.h3`
  border-radius: 25px;
`;

const iconColors = {
  html: "#E34F26", 
  css: "#1572B6", 
  javascript: "#F7DF1E", 
  typescript: "#3178C6", 
  react: "#61DAFB", 
  java: "#007396",
  docker: "#2496ED", 
  spring: "#6DB33F",
  mysql: "#4479A1", 
  postgresql: "#336791", 
};

export const TechIcon = styled.div`
  display: inline-block;
  font-size: 2rem;
  margin: 0 10px;

  svg {
    fill: ${({ $tech }) => iconColors[$tech] || "inherit"};
  }
`;
export const Error = styled.h1`
  font-size: 1.2rem;
  color: red;
`;


