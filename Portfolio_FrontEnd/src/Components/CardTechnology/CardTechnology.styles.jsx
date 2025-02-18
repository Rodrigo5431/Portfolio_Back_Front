import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  background-color: ${({ darkmode }) =>darkmode ==="dark-mode"? "#031016": "#082836"};
  height: 580px;
  border-radius: 25px;
  box-shadow: ${({ darkmode }) =>
    darkmode === "dark-mode"
      ? "0 4px 8px rgba(0, 0, 0, 0.6)"
      : "0 4px 8px rgba(255, 140, 0, 0.4)"};

      @media (max-width:500px) {
        width: 300px;
      }
`;

export const Title = styled.h1`
  color: ${({ darkmode }) =>
    darkmode === "dark-mode" ? "#926ac1" : "#ff4500"};
  font-size: 3rem;
`;

export const Separation = styled.div`
  background-image: ${({ darkmode }) =>
    darkmode === "dark-mode"
      ? "linear-gradient(135deg, #804ba8, #b53ed3)"
      : "linear-gradient(135deg, #ff7f50, #ff4500)"};
  align-self: center;
  width: 85%;
  height: 20px;
  margin-bottom: 50px;
  border-radius: 25px;
`;

export const TechnologyList = styled.ul`
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const TechnologyItem = styled.li`
  margin-bottom: 25px;
  font-size: 2rem;
  color: ${({ darkmode }) =>
    darkmode === "dark-mode" ? "#926ac1" : "#ff4500"};
  

  &:hover {
    color: #fff;
    background: ${({ darkmode }) =>
      darkmode === "dark-mode"
        ? "linear-gradient(135deg, #7b2a8f, #4b2c63)"
        : "linear-gradient(135deg, #ff7f50, #ff4500)"};
    border: 1px solid #fff;
    box-shadow: ${({ darkmode }) =>
      darkmode === "dark-mode"
        ? "0 0 15px rgba(123, 42, 143, 0.8), 0 0 25px rgba(75, 44, 99, 0.6)"
        : "0 0 15px rgba(255, 69, 0, 0.8), 0 0 25px rgba(255, 140, 0, 0.6)"};
    transform: scale(1.1);
    border-radius: 10px;
    padding: 5px 10px;
  }
`;
