import styled from 'styled-components';
import narutoImg from '../../images/naruto.png'


export function App() 
{
  return (
    <Content>
      <img src={narutoImg} alt="Naruto with a kunai"/>
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center
  align-itens: center;
`;

const narutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;