export const drawCircle = (ctx: CanvasRenderingContext2D, width: number) => {
  console.log('drawing circle');
  console.log(width);
  ctx.beginPath();
  // circle
  ctx.arc(width / 2, width / 2, width * 0.45, 0, 2 * Math.PI);
  ctx.stroke();
};

export const drawAxis = (ctx: CanvasRenderingContext2D, width: number) => {
  const ratio = width / 800;
  ctx.beginPath();
  // text
  ctx.font = `${ratio * 22}px Comic Sans MS`;
  ctx.fillText('0', width * 0.5 - 17 * ratio, width * 0.5 + 22 * ratio);
  ctx.fillText('1', width - 32 * ratio, width * 0.5 + 32 * ratio);
  ctx.fillText('-1', 17 * ratio, width * 0.5 + 23 * ratio);
  ctx.fillText('1', width * 0.5 - 19 * ratio, 25 * ratio);
  ctx.fillText('-1', width * 0.5 - 20 * ratio, width - 12 * ratio);
  // x axis
  ctx.moveTo(0, width * 0.5 + 10 * ratio);
  ctx.lineTo(width, width * 0.5 - 2 * ratio);
  // x axis arrow
  ctx.moveTo(width, width * 0.5 - ratio);
  ctx.lineTo(width - 16 * ratio, width * 0.5 - 8 * ratio);
  ctx.moveTo(width - 2 * ratio, width * 0.5 - ratio);
  ctx.lineTo(width - 20 * ratio, width * 0.5 + 10 * ratio);
  // y axis
  ctx.moveTo(width * 0.5, 30 * ratio);
  ctx.lineTo(width * 0.5 + 2 * ratio, width - 28 * ratio);
  // y axis arrow
  ctx.moveTo(width * 0.5 - 1 * ratio, 29 * ratio);
  ctx.lineTo(width * 0.5 - 8 * ratio, 39 * ratio);
  ctx.moveTo(width * 0.5, 32 * ratio);
  ctx.lineTo(width * 0.5 + 8 * ratio, 44 * ratio);
  ctx.stroke();
};

export const drawRectangle = (ctx: CanvasRenderingContext2D, width: number) => {
  console.log('drawing rectangle');
  const ratio = width / 800;
  ctx.beginPath();
  // square
  const x0 = Number((width * 0.05 - 10 * ratio).toFixed(2));
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

  const x4 = Number((width * 0.95 + 15 * ratio).toFixed(2));
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
  ctx.stroke();
};

export const drawDots = (ctx: CanvasRenderingContext2D, width: number) => {
  console.log('drawing dots');
  const ratio = width / 800;
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
};
