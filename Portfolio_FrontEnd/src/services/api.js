import axios from "axios";

 const API = "http://localhost:8080";

export const api = axios.create({
  baseURL: API,
});

export const login = async (email, password) => {

  try {
    const response = await api.post(`/login`, {
        email,
        password
    });
    if (response.status === 200) {
        const token = response.headers["authorization"];
        localStorage.setItem("token", token.split(" ")[1]);
    }
    return response.status;

  } catch (error) {
    console.error(error);
  }

};
export const handlePosts = async () => {

  try {
    const response = await api.get(`/projects`);
    if (response.status == 200) {
      return response.data;
    }

  } catch (error) {
  }
};
export const handleImagePosts = async (post) => {

  try {
    const response = await api.get(`/projects/photo/${post.id}`);
    if (response.status == 200) {
      console.log(`resposta${response.data}`);
      
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
export const handleCreatePost = async (formData) => {

  const token = localStorage.getItem("token");
  
  try {
    const response = await api.post("/projects", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${token}`
      }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Erro ao criar projeto");
    }
  } catch (error) {
    console.error("Erro ao enviar o post:", error.response?.data || error);
    throw error;
  }
};
export const handleUpdatePost = async (formData, id) => {

  const token = localStorage.getItem("token");
  try {
    const response = await api.put(`/projects/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${token}`
      }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Erro ao atualizar projeto");
    }
  } catch (error) {
    console.error("Erro ao atualizar o post:", error.response?.data || error);
    throw error;
  }
}
export const handleDelete = async (id) => {

  const token = localStorage.getItem("token");
  try {
    const response = await api.delete(`/projects/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });

    if (response.status === 200) {
      return response;
    } else {
      console.error("Erro ao deletar projeto");
    }
  } catch (error) {
    console.error("Erro ao deletar o post:", error.response?.data || error);
    throw error;
  }
};
export const handleSendMail = async (formData) => {

  try {
    const response = await api.post(`/email`, {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
      
    });
      return response;
    
  } catch (error) {
    console.error("Erro ao enviar email:", error.response?.data || error);
    throw error;
  }
};

