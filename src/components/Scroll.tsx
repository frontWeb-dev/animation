import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { IProps } from './Gestures';

const Scroll = ({ text }: IProps) => {
  const x = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <>
      <Box>
        <SBox style={{ x, height: height }} drag dragSnapToOrigin whileDrag={{ scale: 0.8 }} />
      </Box>
      <p>{text}</p>
    </>
  );
};

export default Scroll;

const Box = styled(motion.div)`
  display: flex;
  width: 150px;
  height: 150px;
  background-color: #534eff;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow-y: hidden;
`;

const SBox = styled(motion.div)`
  width: 100%;
  height: 50px;
  background-color: #fff;
`;
