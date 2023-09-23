import { motion } from 'framer-motion';
import styled from 'styled-components';
import { IProps } from './Animation';

const boxVars = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', duration: 0.5, bounce: 0.5, staggerChildren: 0.2 },
  },
};

const circleVars = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: { opacity: 1, y: 0 },
};

const Varients = ({ background }: IProps) => {
  return (
    <Container background={background}>
      <Box variants={boxVars} initial='start' animate='end'>
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
      </Box>
      <p>Variants</p>
    </Container>
  );
};

export default Varients;

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

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  place-self: center;
  border-radius: 100%;
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
