import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { IProps } from './Gestures';
import { useState } from 'react';

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

const Varients = ({ text }: IProps) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((prev) => !prev);

  return (
    <>
      <AnimatePresence>
        {show && (
          <Box variants={boxVars} initial='start' animate='end'>
            <Circle variants={circleVars} />
            <Circle variants={circleVars} />
            <Circle variants={circleVars} />
            <Circle variants={circleVars} />
          </Box>
        )}
      </AnimatePresence>
      <p>{text}</p>
      <Button onClick={toggleShow}>Click</Button>
    </>
  );
};

export default Varients;

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

const Button = styled.button`
  position: absolute;
  right: 20px;
  bottom: 25px;
  padding: 10px 20px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 10px;
`;
