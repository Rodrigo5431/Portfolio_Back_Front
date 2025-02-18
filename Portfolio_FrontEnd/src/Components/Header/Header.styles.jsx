import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  transition: background-color 0.3s ease, color 0.3s ease;


`;

export const NavigationSection = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 96%;
`;
export const ButtonCreateProject = styled.h1`
  display: flex;
  width: 15%;
  height: 30px;
  cursor: pointer;
  color: ${({ darkmode }) => (darkmode == "dark-mode" ? "#fff" : "#000")};
`;

export const Title = styled.h1`
  font-size: 3em;
  color: ${({ darkmode }) => (darkmode == "dark-mode" ? "#fff" : "#000")};
  transition: color 0.8s ease;
  margin-left: 15px;

  @media (max-width:1000px) {
    font-size: 2rem;
  }
  @media (max-width:500px) {
    font-size: 2.4rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`;

export const ListNavigation = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 5px;
`;
export const ListComponents = styled.li`
  font-size: 2em;
  font-weight: 600;
  color: ${({ darkmode }) => (darkmode === "dark-mode" ? "#fff" : "#333")};
  transition: color 0.8s ease;
  cursor: pointer;
  margin-left: 25px;

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1050px) {
    font-size: 1.2rem;
  }
  @media (max-width: 900px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const Flag = styled.img`
  width: 27px;
  height: 27px;
  margin-right: 15px;
  cursor: pointer;
`;

export const DarkModeSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  background-color: ${({ darkmode }) => darkmode === "dark-mode" ? "#444" : "#ccc"};
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px;
  margin-right: 35px;

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 19px;
    height: 19px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: ${({ darkmode }) => darkmode === "dark-mode" ? "translateX(25px)" : "translateX(0)"};
  }
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 820px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    margin-right: 10px;
  }
`;
export const MenuLine = styled.div`
  width: 40px;
  height: 5px;
  background-color: ${({ darkmode }) => darkmode === "dark-mode" ? "#fff" : "#000"};
`;
export const MenuBurguer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 96%;
  height: 200px;
  gap: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (min-width: 821px) {
    display: none;
  }
`;
