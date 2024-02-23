import styled from 'styled-components';

export const AtendimentoContainer = styled.div`
  max-width: 640px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  margin: 0 600px;

  h2 {
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
  }
`;
