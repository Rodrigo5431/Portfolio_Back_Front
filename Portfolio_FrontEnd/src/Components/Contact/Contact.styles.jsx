import { styled } from "styled-components";

export const ContactMe = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  
`;

export const Title = styled.h1`
  color: ${({ darkmode }) => (darkmode === "dark-mode" ? "#926ac1" : "#ff4500")};
  font-size: 4rem;
  text-align: center;

  
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ darkmode }) => (darkmode === "dark-mode" ? "#031016" : "#082836")};
  width: 50%;
  padding: 20px;
  border-radius: 10px;
  gap: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 800px) {
    width: 80%;

  }
`;

export const TitleInput = styled.label`
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const TextInput = styled.input`
  background-color: ${({ darkmode }) => (darkmode === "dark-mode" ? "#031016" : "#082836")};
  color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  width: 90%;
  &:focus {
    outline: none;
    border-color: ${({ darkmode }) => (darkmode === "dark-mode" ? "#926ac1" : "#ff4500")};
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ darkmode }) => (darkmode === "dark-mode" ? "#926ac1" : "#ff4500")};
  color: white;
  font-size: 1.2rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background-color: ${({ darkmode }) => (darkmode === "dark-mode" ? "#7a52a1" : "#e03e00")};
  }
`;