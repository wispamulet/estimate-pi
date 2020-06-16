import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  #myCanvas {
    /* outline: 1px solid #ff0000; */
  }
`;

interface CanvasProps {
  width: number;
  times: number;
}

const Canvas: React.FC<CanvasProps> = ({ width, times }) => {
  console.log('draw');
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  useEffect(() => {
    const ratio = width / 800;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    // reset canvas to empty
    canvas.width = width;
    canvas.height = width;

    ctx.beginPath();
    ctx.font = '18px Comic Sans MS';
    // circle
    ctx.arc(width / 2, width / 2, width * 0.45, 0, 2 * Math.PI);
    // square
    const x0 = Number((width * 0.05 - 2 * ratio).toFixed(2));
    const y0 = Number((width * 0.05 + 4 * ratio).toFixed(2));
    ctx.moveTo(x0, y0);
    // ctx.fillText(`${x0}, ${y0}`, x0 - 25, y0 - 10);
    const x1 = Number((width * 0.95 - 8 * ratio).toFixed(2));
    const y1 = Number((width * 0.05 + 1 * ratio).toFixed(2));
    ctx.lineTo(x1, y1);
    // ctx.fillText(`${x1}, ${y1}`, x1 - 60, y1 - 10);

    const x2 = Number((width * 0.95 + 2 * ratio).toFixed(2));
    const y2 = Number((width * 0.05 - 9 * ratio).toFixed(2));
    ctx.moveTo(x2, y2);
    // ctx.fillText(`${x2}, ${y2}`, x2 - 50, y2 + 30);
    const x3 = Number((width * 0.95 + 4 * ratio).toFixed(2));
    const y3 = Number((width * 0.95 + 8 * ratio).toFixed(2));
    ctx.lineTo(x3, y3);
    // ctx.fillText(`${x3}, ${y3}`, x3 - 40, y3 - 10);

    const x4 = Number((width * 0.95 + 9 * ratio).toFixed(2));
    const y4 = Number((width * 0.95 - 1 * ratio).toFixed(2));
    ctx.moveTo(x4, y4);
    // ctx.fillText(`${x4}, ${y4}`, x4 - 80, y4 + 20);
    const x5 = Number((width * 0.05 - 3 * ratio).toFixed(2));
    const y5 = Number((width * 0.95 + 2 * ratio).toFixed(2));
    ctx.lineTo(x5, y5);
    // ctx.fillText(`${x5}, ${y5}`, x5 - 10, y5 - 10);

    const x6 = Number((width * 0.05 + 3 * ratio).toFixed(2));
    const y6 = Number((width * 0.95 - 1 * ratio).toFixed(2));
    ctx.moveTo(x6, y6);
    // ctx.fillText(`${x6}, ${y6}`, x6 - 40, y6 + 20);
    const x7 = Number((width * 0.05 - 3 * ratio).toFixed(2));
    const y7 = Number((width * 0.05 - 1 * ratio).toFixed(2));
    ctx.lineTo(x7, y7);
    // ctx.fillText(`${x7}, ${y7}`, x7 + 20, y7 + 30);

    // x axis
    ctx.moveTo(14 * ratio, width * 0.5 + 2 * ratio);
    ctx.lineTo(width - 2 * ratio, width * 0.5 - 2 * ratio);
    // x axis arrow
    ctx.moveTo(width, width * 0.5 - ratio);
    ctx.lineTo(width - 28 * ratio, width * 0.5 - 12 * ratio);
    ctx.moveTo(width - 2 * ratio, width * 0.5 - ratio);
    ctx.lineTo(width - 30 * ratio, width * 0.5 + 10 * ratio);
    // y axis
    ctx.moveTo(width * 0.5, 10 * ratio);
    ctx.lineTo(width * 0.5 + 2 * ratio, width - 12 * ratio);
    // y axis arrow
    ctx.moveTo(width * 0.5 - 1 * ratio, 10 * ratio);
    ctx.lineTo(width * 0.5 - 8 * ratio, 32 * ratio);
    ctx.moveTo(width * 0.5, 10 * ratio);
    ctx.lineTo(width * 0.5 + 14 * ratio, 34 * ratio);
    // text
    ctx.font = `${ratio * 22}px Comic Sans MS`;
    ctx.fillText('0', width * 0.5 - 17 * ratio, width * 0.5 + 22 * ratio);
    ctx.fillText('1', width - 32 * ratio, width * 0.5 + 32 * ratio);
    ctx.fillText('-1', 17 * ratio, width * 0.5 + 23 * ratio);
    ctx.fillText('1', width * 0.5 - 19 * ratio, 25 * ratio);
    ctx.fillText('-1', width * 0.5 - 20 * ratio, width - 12 * ratio);
    ctx.stroke();

    if (times > 0) {
      for (let i = 0; i < times; i += 1) {
        const x = Math.random() * 2 - 1;
        const y = Math.random() * 2 - 1;
        const z = Math.sqrt(x * x + y * y);
        const coordinateX = x * width * 0.45 + width * 0.5;
        const coordinateY = y * width * 0.45 + width * 0.5;

        ctx.beginPath();
        ctx.arc(coordinateX, coordinateY, 3 * ratio, 0, 2 * Math.PI);
        if (z <= 1) {
          ctx.fillStyle = 'blue';
        } else {
          ctx.fillStyle = 'red';
        }
        ctx.fill();
      }
    }
  }, [times, width]);

  return (
    <CanvasContainer>
      <canvas id="myCanvas" width={width} height={width} ref={canvasRef} />
    </CanvasContainer>
  );
};

export default Canvas;
