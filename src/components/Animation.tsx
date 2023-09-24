import { motion } from 'framer-motion';
import styled from 'styled-components';
import { IProps } from './Gestures';

const Animation = ({ text }: IProps) => {
  return (
    <>
      <Box
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 180 }}
        transition={{ type: 'spring', bounce: 0.5 }}
      />

      <div>
        <p>{text}</p>
      </div>
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
