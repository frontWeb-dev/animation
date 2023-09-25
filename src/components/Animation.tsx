import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { IProps } from './Gestures';
import { useState } from 'react';

const Animation = ({ text }: IProps) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((prev) => !prev);

  return (
    <>
      <AnimatePresence>
        {show && (
          <Box
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotateZ: 360 }}
            transition={{ type: 'spring', bounce: 0.5 }}
          />
        )}
      </AnimatePresence>

      <p>{text}</p>
      <Button onClick={toggleShow}>Click</Button>
    </>
  );
};

export default Animation;

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 20px;
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
