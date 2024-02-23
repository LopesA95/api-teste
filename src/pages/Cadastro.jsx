import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer } from '../styles/FormStyles';

const Cadastro = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    nm_usuario: '',
    senha: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://api.brnn-tech.com.br/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });
      if (response.ok) {
        navigate('/login');
      } else {
        alert('Falha no cadastro');
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <label>Nome de usuário</label>
        <input
          name="nm_usuario"
          type="text"
          value={usuario.nm_usuario}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={usuario.email}
          onChange={handleInputChange}
        />
        <label>Senha</label>
        <input
          name="senha"
          type="password"
          value={usuario.senha}
          onChange={handleInputChange}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </FormContainer>
  );
};

export default Cadastro;
