export default function estimatePi(n) {
  let numPointCircle = 0;
  let numPointTotal = 0;

  for (let i = 0; i < n; i += 1) {
    const x = Math.random();
    const y = Math.random();
    const z = Math.sqrt(x * x + y * y);

    if (z <= 1) {
      numPointCircle += 1;
    }
    numPointTotal += 1;
  }

  return (numPointCircle / numPointTotal) * 4;
}

// console.log(estimatePi(1e6));
