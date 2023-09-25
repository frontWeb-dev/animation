import { AnimatePresence, motion } from 'framer-motion';
import { IProps } from './Gestures';
import styled from 'styled-components';
import { useState } from 'react';

const boxVars = {
  entry: (isBack: boolean) => ({
    x: isBack ? -200 : 200,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3 },
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 200 : -200,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3 },
  }),
};

const Slider = ({ text }: IProps) => {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const prev = () => {
    setIsBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  const next = () => {
    setIsBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };

  return (
    <>
      <AnimatePresence mode='wait' custom={isBack}>
        <Box
          custom={isBack}
          variants={boxVars}
          initial='entry'
          animate='center'
          exit='exit'
          key={visible}>
          {visible}
        </Box>
      </AnimatePresence>
      <Buttons>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </Buttons>
      <p>{text}</p>
    </>
  );
};

export default Slider;

const Box = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 70px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  button {
    margin-right: 10px;
    padding: 10px 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 10px;
  }
`;
