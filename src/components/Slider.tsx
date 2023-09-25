import { AnimatePresence, motion } from 'framer-motion';
import { IProps } from './Gestures';
import styled from 'styled-components';
import { useState } from 'react';

const boxVars = {
  initial: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
  },
};
const Slider = ({ text }: IProps) => {
  const [visible, setVisible] = useState(1);
  const prev = () => setVisible((prev) => (prev === 0 ? 0 : prev - 1));
  const next = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1));

  return (
    <>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
          (i) =>
            i === visible && (
              <Box variants={boxVars} initial='initial' animate='visible' exit='exit' key={i}>
                {i}
              </Box>
            )
        )}
      </AnimatePresence>
      <p>{text}</p>
      <Buttons>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </Buttons>
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
  right: 20px;
  bottom: 25px;

  button {
    margin-right: 10px;
    padding: 10px 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 10px;
  }
`;
