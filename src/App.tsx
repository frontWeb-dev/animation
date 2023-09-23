import styled from 'styled-components';
import Animation from './components/Animation';
import Varients from './components/Varients';

function App() {
  return (
    <Wrapper>
      <Animation background={'linear-gradient(135deg, #e09, #d0e)'} />

      <Varients background={'linear-gradient(135deg, #d801ef, #b50af8)'} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: #282828;
`;
