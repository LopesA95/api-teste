import { useEffect, useState } from 'react';
import { AtendimentoContainer } from '../styles/AtendimentoStyles';

const Atendimentos = () => {
  const [atendimentos, setAtendimentos] = useState([]);

  useEffect(() => {
    const fetchAtendimentos = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://api.brnn-tech.com.br/atendimentos/agendamento/', {
          method: 'GET',
          headers: {
            'Authorization': token,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setAtendimentos(data);
        } else {
          alert('Falha ao buscar atendimentos.');
        }
      } catch (error) {
        console.error('Erro ao buscar atendimentos:', error);
        alert('Erro ao buscar atendimentos.');
      }
    };

    fetchAtendimentos();
  }, []);

  return (
    <AtendimentoContainer>
      <h2>Atendimentos</h2>
      {atendimentos.length > 0 ? (
        <ul>
          {atendimentos.map((atendimento) => (
            <li key={atendimento.id}>
              <strong>Descrição:</strong> {atendimento.descricao}, {' '}
              <strong>Data:</strong> {new Date(atendimento.data).toLocaleDateString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>Não há atendimentos cadastrados.</p>
      )}
    </AtendimentoContainer>
  );
};

export default Atendimentos;
