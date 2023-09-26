import React, { useState } from 'react';
import { IProps } from './Gestures';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const OverlayVars = {
  initial: {
    background: 'rgba(0,0,0,0)',
  },

  visible: {
    background: 'rgba(0,0,0,0.7)',
  },

  exit: {
    background: 'rgba(0,0,0,0)',
  },
};
const SharedLayout = ({ text }: IProps) => {
  const [id, setId] = useState<null | string>(null);

  return (
    <Wrapper>
      <Grid>
        {[1, 2, 3, 4].map((n) => (
          <Box onClick={() => setId(n + '')} key={n} layoutId={n + ''} />
        ))}
      </Grid>

      <AnimatePresence>
        {id && (
          <Overlay
            onClick={() => setId(null)}
            variants={OverlayVars}
            initial='initial'
            animate='visible'
            exit='exit'>
            <Box layoutId={id + ''} style={{ width: 300, height: 150 }}>
              Boom!
            </Box>
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default SharedLayout;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;
