import { motion } from 'framer-motion';
import styled from 'styled-components';

export interface IProps {
  background: string;
}

const Animation = ({ background }: IProps) => {
  return (
    <Container background={background}>
      <Box
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 180 }}
        transition={{ type: 'spring', bounce: 0.5 }}
      />
      <p>Animation</p>
    </Container>
  );
};

export default Animation;

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
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
