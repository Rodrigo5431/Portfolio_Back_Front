import React, { useState } from "react";
import { login } from "../../services/api";
import { All, Botao, Formulario, H2, Input, Input2, Main } from "./Login.styles";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setSuccess(false); 

    const response = await login(username, password);

    if (response === 200) {
      setLoading(false);
      setError("");
      setSuccess(true);
       setTimeout(() =>navigate("/"), 2000);
    } else {
      setLoading(false);
      setSuccess(false)
      setError( "Erro ao realizar login. Tente novamente.");
    }
  };

  return (
    <Main >
      <Header/>
      <All>
        <H2>Entrar</H2>
        <Formulario onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input2
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Botao type="submit">Login</Botao>
        </Formulario>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {loading && (
          <p style={{ color: "#fff", marginTop: "10px" }}>
            Carregando...
          </p>
        )}
        {success && (
          <p style={{ color: "green", marginTop: "10px" }}>
            Login realizado com sucesso!
          </p>
        )}
      </All>
    </Main>
  );
}
