import { motion } from 'framer-motion';
import styled from 'styled-components';

export interface IProps {
  text: string;
}

const vars = {
  hover: { scale: 1.2, rotateZ: 90 },
  click: { scale: 1, borderRadius: '100px' },
};
const Gestures = ({ text }: IProps) => {
  return (
    <>
      <Box variants={vars} whileHover='hover' whileTap='click' />
      <p>
        {text} <span style={{ fontSize: '1rem', fontWeight: 400 }}>hover & click</span>
      </p>
    </>
  );
};

export default Gestures;

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
