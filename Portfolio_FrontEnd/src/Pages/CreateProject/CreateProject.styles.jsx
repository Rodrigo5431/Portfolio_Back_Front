import { styled } from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
   
`;

export const CardPost = styled.div`
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0px 0px 100px 0px rgba(75, 44, 99, 0.8);
    padding: 30px 70px;
    border-radius: 15px;
    width: 50%;
    height: 60%;
    @media (max-width: 480px) {
    width: 25rem; 
  }

  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 50%;
  }
`;

export const MsgH1 = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    text-align: center;
    background: linear-gradient(270deg, #4b2c63 40%, #bfa2d4 60%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    color: #fff;
    font-size: 3rem; 
    margin-bottom: 5px;
     @media (max-width: 480px) {
    font-size: 2.5em;
  }

   @media (min-width: 481px) and (max-width: 768px) {
    font-size: 2em;
  }

  @media (min-width: 769px) and (max-width: 1399px) {
    font-size: 1.8em;
  }

  @media (min-width: 1400px) {
    font-size: 2em;
  } 
`;

export const Line = styled.div`
    height: 2px;
    background-color: #bfa2d4;
`;

export const CardBody = styled.div`
    margin-top: 25px;
    
    @media (max-width: 480px) {
    width: 100%; 
  }

`;


export const Formulario = styled.form`
    align-items: center;
    display: block;
    @media (max-width: 480px) {
      width: 100%; 
    }
    `;

    export const TitleLab = styled.label`
        display: block;
        margin-bottom: 7px;
        font-size: 1.8rem;
        color: #c9c9c9;
    `;

export const TitleText = styled.textarea`
    width: 100%;
    border-radius: 10px;
    font-size: 1.2rem;
    resize: none;
    padding-left: 15px;
`;

export const BtnPost = styled.button`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-size: 1.3rem;
    padding: 5px 50px;
    color: #fff;
    background-color: #4b2c63;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
`;
export const InputPhoto = styled.input`
    @media (max-width: 500px) {
      font-size: 0.7rem;
    }
`;

export const BtnDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 15px;
    gap:30px;

    @media (max-width: 500px) {
      flex-direction: column;
    }
`;

export const BtnPost2 = styled(BtnPost)`

`
