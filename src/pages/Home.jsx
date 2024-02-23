// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  margin: 0 800px;
`;

const Home = () => {
  return (
    <HomePage>
      <h1>Bem-vindo</h1>
      <p>Acesse suas informações de atendimento de forma rápida e fácil.</p>
      <nav>
        <Link to="/login">Login</Link> | <Link to="/cadastro">Cadastro</Link>
      </nav>
    </HomePage>
  );
};

export default Home;
