import React, { type FC, type ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { Grow, Zoom, Fade, Slide } from '@mui/material';

type TransitionComponent =
  | typeof Grow
  | typeof Zoom
  | typeof Fade
  | typeof Slide;

interface AnimateOnViewProps {
  children: ReactNode;
  transition: TransitionComponent;
  timeout?: number;
  transitionProps?: Record<string, any>; // props like slide direction
  viewThreshold?: number;
}

function AnimateOnView({ children, transition: Transition, timeout = 500, transitionProps = {}, viewThreshold=0.1 } : AnimateOnViewProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: viewThreshold,
  });

  return (
    <div ref={ref}>
      <Transition in={inView} timeout={timeout} {...transitionProps}>
        <div>{children}</div>
      </Transition>
    </div>
  );
};

export default AnimateOnView;
