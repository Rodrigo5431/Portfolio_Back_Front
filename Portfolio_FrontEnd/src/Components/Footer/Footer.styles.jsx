import { styled } from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #171717;
  margin-top: 150px;
`;

export const Title = styled.h1`
  color: #fff;
  transition: color 0.8s ease;
  font-weight: 500;
`;
export const PositionUser = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const User = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 150px;
  width: 12rem;
`;
export const Icons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
`;
export const Icon = styled.a`
  color: #fff;
  text-decoration: none;
  border: 2px solid #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    background-color: #fff;
    border-radius: 50%;
    color: #000;
    transition: 0.3s;
  }
  :active {
    background-color: #fff;
    color: #000;
    transform: scale(0.9);
  }
`;
export const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: #3152b7;
  margin-bottom: 20px;
  transition: 0.3s;
  position: absolute;
  bottom: -20px;
`;
