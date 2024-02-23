import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer } from '../styles/FormStyles';

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    senha: '',
  });

  const handleInputChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://api.brnn-tech.com.br/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/atendimentos');
      } else {
        alert('Login falhou. Verifique seu e-mail e senha.');
      }
    } catch (error) {
      console.error('Erro ao tentar logar:', error);
      alert('Erro ao tentar logar.');
    }
  };

  return (
    <FormContainer>
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={loginInfo.email}
            onChange={handleInputChange}
          />
          <label>Senha</label>
          <input
            name="senha"
            type="password"
            value={loginInfo.senha}
            onChange={handleInputChange}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </FormContainer>
  );
};

export default Login;
