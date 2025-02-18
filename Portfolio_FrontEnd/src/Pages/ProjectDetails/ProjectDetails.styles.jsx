import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-size: 22px;
  padding: 5px 50px;
  text-align: center;
  color: #fff;
  background-image: ${({ darkmode }) =>
    darkmode === "dark-mode"
      ? "linear-gradient(135deg, #4b2c63, #7b2a8f)"
      : "linear-gradient(135deg, #ff7f50, #ff4500)"};

  border: 0;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 40px;
  box-shadow: ${({ darkmode }) =>
    darkmode === "dark-mode"
      ? "0 4px 8px rgba(0, 0, 0, 0.5), 0 0 15px rgba(123, 42, 143, 0.6)"
      : "0 4px 8px rgba(255, 69, 0, 0.4), 0 0 15px rgba(255, 140, 0, 0.6)"};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-image: ${({ darkmode }) =>
      darkmode === "dark-mode"
        ? "linear-gradient(135deg, #7b2a8f, #4b2c63)"
        : "linear-gradient(135deg, #ff4500, #ff7f50)"};

    box-shadow: ${({ darkmode }) =>
      darkmode === "dark-mode"
        ? "0 6px 12px rgba(50, 50, 50, 0.5), 0 0 20px rgba(96, 33, 112, 0.8)"
        : "0 6px 12px rgba(255, 69, 0, 0.6), 0 0 20px rgba(255, 140, 0, 0.8)"};
    transform: scale(1.05);
  }
`;

export const ConfirmationArea = styled.div`
  display: flex;
  flex-direction: Column;
  background-color: #082836;
  width: 40%;
  height: 150px;
  border-radius: 15px;
  margin-top: 10px;
  padding: 40px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  align-items: center;
  text-align: center;
`;
export const ButtonsConfirmation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 25px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`;
export const ProjectInformations = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #082836;
  width: 90%;
  max-width: 1100px;
  height: auto;
  margin-top: 50px;
  border-radius: 15px;
  padding: 40px;
  gap: 40px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px;
  }
`;

export const ImageProject = styled.img`
  width: 50%;
  height: auto;
  max-height: 450px;
  object-fit: cover;
  align-self: center;
  border-radius: 15px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const InformationsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const TitleProject = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #bbb;
  line-height: 1.6;
  max-width: 600px;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const TechnologiesArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  align-items: center;
`;

export const TitleTechnology = styled.h2`
  background-image: ${({ darkmode }) =>
    darkmode === "dark-mode"
      ? "linear-gradient(135deg, #804ba8, #b53ed3)"
      : "linear-gradient(135deg, #ff7f50, #ff4500)"};
  border-radius: 12px;
  padding: 12px 24px;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-image: ${({ darkmode }) =>
      darkmode === "dark-mode"
        ? "linear-gradient(135deg, #7b2a8f, #4b2c63)"
        : "linear-gradient(135deg, #ff4500, #ff7f50)"};

    box-shadow: ${({ darkmode }) =>
      darkmode === "dark-mode"
        ? "0 6px 12px rgba(50, 50, 50, 0.5), 0 0 20px rgba(96, 33, 112, 0.8)"
        : "0 6px 12px rgba(255, 69, 0, 0.6), 0 0 20px rgba(255, 140, 0, 0.8)"};
    transform: scale(1.05);
  }
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const TechnologyItem = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  color: #ddd;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 15px;
  border-radius: 8px;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color: #222;
    transform: translateY(-3px);
  }
`;

export const LinksArea = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
`;

export const LinkProject = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #007bff;
  color: white;
  padding: 12px 18px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }
`;

export const LinkGithub = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #333;
  color: white;
  padding: 12px 18px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color: #222;
    transform: translateY(-3px);
  }
`;
export const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #333;
  color: white;
  padding: 12px 18px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color: #222;
    transform: translateY(-3px);
  }
`;
