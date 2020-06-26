import React from 'react';
import styled from 'styled-components';
import { PointContext, StepContext } from '../contexts/piContexts';
import { drawAxis, drawCircle, drawDots, drawRectangle } from '../utils/draw';

const StyledSection = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  #myCanvas {
    /* outline: 1px solid #ff0000; */
    /* background: red; */
    width: 100%;
    @media (min-width: 800px) {
      width: 800px;
      height: 800px;
    }
  }
`;

const Canvas: React.FC = () => {
  console.log('Canvas Rendered');
  const canvasRef = React.useRef<HTMLCanvasElement>(null!);
  const { ptNum } = React.useContext(PointContext);
  const { step } = React.useContext(StepContext);
  const [width, setWidth] = React.useState(
    window.innerWidth >= 800 ? 800 : window.innerWidth
  );

  const resize = (): void => {
    setWidth(window.innerWidth >= 800 ? 800 : window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', resize);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    // reset canvas to empty
    canvas.width = width; // eslint-disable-line
    canvas.height = width;

    drawAxis(ctx, width);
    drawCircle(ctx, width);
    if (step >= 1) {
      drawRectangle(ctx, width);
    }
    if (ptNum > 0) {
      for (let i = 0; i < ptNum; i += 1) {
        drawDots(ctx, width);
      }
    }

    return () => window.removeEventListener('resize', resize);
  }, [ptNum, step, width]);

  return (
    <StyledSection>
      {/* <p>hello</p> */}
      <canvas id="myCanvas" width={width} height={width} ref={canvasRef} />
    </StyledSection>
  );
};

export default Canvas;
