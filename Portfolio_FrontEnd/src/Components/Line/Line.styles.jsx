import { styled } from "styled-components";

export const Lines = styled.div`
  background-image: ${({ darkmode }) =>
    darkmode === "dark-mode"
      ? "linear-gradient(135deg, #4b2c63, #7b2a8f)"
      : "linear-gradient(135deg, #ff7f50, #ff4500)"};
  align-self: center;
  margin-top: 150px;
  width: 85%;
  height: 1px;
`;
