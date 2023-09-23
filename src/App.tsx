import styled from 'styled-components';
import Animation from './components/Animation';
import Varients from './components/Varients';
import Gestures from './components/Gestures';
import Drag from './components/Drag';

function App() {
  return (
    <Wrapper>
      <Container background={'linear-gradient(135deg, #e09, #d0e)'}>
        <Animation text='Animation' />
      </Container>

      <Container background={'linear-gradient(135deg, #d801ef, #b50af8)'}>
        <Varients text='Varients' />
      </Container>

      <Container background={'#8708ff'}>
        <Gestures text='Gestures' />
      </Container>

      <Container background={'#5b00ff'}>
        <Drag text='Drag' />
      </Container>
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
  align-content: center;
  background-color: #282828;
`;

const Container = styled.div<{ background: string }>`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 10px;

  p {
    position: absolute;
    bottom: 10px;
    left: 30px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
  }
`;
