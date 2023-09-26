import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { IProps } from './Gestures';
import { useState } from 'react';

const Layout = ({ text }: IProps) => {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <>
      <AnimatePresence>
        <Box
          style={{
            justifyContent: clicked ? 'center' : 'flex-start',
            alignItems: clicked ? 'center' : 'flex-start',
          }}>
          <Circle layout />
        </Box>
      </AnimatePresence>
      <p>{text}</p>
      <Button onClick={toggleClicked}>Click</Button>
    </>
  );
};

export default Layout;

const Box = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: #00a5ff;
  border-radius: 50px;
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
