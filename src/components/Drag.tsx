import { motion } from 'framer-motion';
import styled from 'styled-components';
import { IProps } from './Gestures';

const Drag = ({ text }: IProps) => {
  return (
    <>
      <Box>
        <SBox drag dragSnapToOrigin={true} whileDrag={{ scale: 0.8 }} />
      </Box>
      <p>{text}</p>
    </>
  );
};

export default Drag;

const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: #8233ff;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

const SBox = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 20px;
`;
