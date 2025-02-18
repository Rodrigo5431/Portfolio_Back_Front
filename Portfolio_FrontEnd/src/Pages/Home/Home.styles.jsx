import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${({ darkmode }) => (darkmode === "dark-mode" ? "#926ac1" : "#ff4500")};
  font-size: 5rem;
  margin-left: 200px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    margin-left: 50px;
    text-align: center;
    align-items: center;
}
  @media (max-width: 800px) {
  margin: 0;
}

`;

export const Apresentation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 200px;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageMe = styled(motion.img)`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin-right: 100px;


  @media (max-width: 1400px) {
    margin-left: 50px;
  }
  @media (max-width: 1200px) {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 800px) {
    width: 300px;
    height: 300px;
    margin: 0;
    margin-top: 70px;
  }

`;

export const LinkDownload = styled.a`
  text-decoration: none;
  height: 80px;
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;

export const ButtonDownload = styled.button`
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

  @media (max-width: 650px) {
    width: 50px;
    font-size: 15px;
  }
`;
