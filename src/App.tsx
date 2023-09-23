import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <Container>
        <Box
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 180 }}
          transition={{ type: 'spring', bounce: 0.5 }}
        />
        <p>Animation</p>
      </Container>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282828;
`;

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
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

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
