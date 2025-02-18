import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Auth";
import { useDarkMode } from "../../Context/DarkContext";
import {
  ContactForm,
  ContactMe,
  SubmitButton,
  TextInput,
  Title,
  TitleInput,
} from "./Contact.styles";
import {handleSendMail} from "../../services/api";

export default function Contact() {
  const [language] = useContext(AuthContext);
  const [loading,setLoading] = useState(false);
  const [sucess,setSucess] = useState("");
  const [error,setError] = useState(false);
  const { darkmode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSucess(false);
    setError(false);
    try {
      const response = await handleSendMail(formData);
      if (response.status === 200) {
      setLoading(false);
      setError(false);
      setSucess(response.data);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
    else{
      setError(true);
      setSucess("");
      setLoading(false);
    }
      
    } catch (error) {
      setError(true);
      setSucess("");
      setLoading(false);
    }
  };

  return (
    <ContactMe>
      <Title darkmode={darkmode ? "dark-mode" : "light-mode"}>
        {language ? "Entrar em contato" : "Contact Me"}
      </Title>
      <ContactForm onSubmit={handleSubmit}>
        <TitleInput>{language?"Nome":"Name"}</TitleInput>
        <TextInput
          darkmode={darkmode ? "dark-mode" : "light-mode"}
          type="text"
          name="name"
          placeholder={language ? "Digite seu Nome" : "Type your Name"}
          value={formData.name}
          onChange={handleChange}
          required
        />

        <TitleInput>Email</TitleInput>
        <TextInput
          darkmode={darkmode ? "dark-mode" : "light-mode"}
          type="email"
          name="email"
          placeholder={language ? "Digite seu Email" : "Type your Email"}
          value={formData.email}
          onChange={handleChange}
          required
        />

        <TitleInput>{language?"Assunto":"Subject"}</TitleInput>
        <TextInput
          darkmode={darkmode ? "dark-mode" : "light-mode"}
          type="text"
          name="subject"
          placeholder={language ? "Digite o Assunto" : "Type the Subject"}
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <TitleInput>{language?"Mensagem":"Message"}</TitleInput>
        <TextInput
          darkmode={darkmode ? "dark-mode" : "light-mode"}
          as="textarea"
          name="message"
          rows="5"
          placeholder={language ? "Digite sua Mensagem" : "Type your Message"}
          value={formData.message}
          onChange={handleChange}
          required
        />
        {loading && (
          <div>
            <p style={{ color: "#fff" ,fontSize:"20px" }}>Enviando...</p>
          </div>
        )}
        {sucess != "" && (
          <div>
            <p style={{ color: "green", textAlign:"center" ,fontSize:"22px"}}>{sucess}</p>
          </div>
        )}
        {error && (
          <div>
            <p style={{ color: "red" ,textAlign:"center" ,fontSize:"22px"}}>Falha ao enviar a mensagem. Tente novamente.</p>
          </div>
        )}

        <SubmitButton
          darkmode={darkmode ? "dark-mode" : "light-mode"}
          type="submit"
        >
          {language ? "Enviar" : "Send"}
        </SubmitButton>
      </ContactForm>
    </ContactMe>
  );
}
