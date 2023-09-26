import styled from 'styled-components';
import Animation from './components/Animation';
import Varients from './components/Varients';
import Gestures from './components/Gestures';
import Drag from './components/Drag';
import Scroll from './components/Scroll';
import Path from './components/Path';
import Slider from './components/Slider';
import Layout from './components/Layout';
import LayoutId from './components/LayoutId';

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

      <Container background={'#2328ff'}>
        <Scroll text='Scroll' />
      </Container>

      <Container background={'linear-gradient(135deg, #005bff, #0095ff)'}>
        <Path text='Path' />
      </Container>

      <Container background={'linear-gradient(135deg, #007bff, #00ddff)'}>
        <Slider text='Slider' />
      </Container>

      <Container background={'#00e5ff'}>
        <Layout text='Layout' />
      </Container>

      <Container style={{ flexDirection: 'row', justifyContent: 'center' }} background={'#49f6b3'}>
        <LayoutId text='LayoutId' />
      </Container>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  height: 200vh;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-content: center;
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
  overflow: hidden;

  p {
    position: absolute;
    bottom: 10px;
    left: 30px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
  }
`;
