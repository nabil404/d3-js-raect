import { useState, useCallback } from "react";
import "./App.css";

const width = 570;
const height = 600;
const circleRadius = 30;
const initialMousePosition = {
  x: width / 2,
  y: height / 2,
};

function App() {
  const [mousePostion, setMousPosition] = useState(initialMousePosition);
  
  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      setMousPosition({ x: clientX, y: clientY });
    },
    [setMousPosition]
  );

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle cx={mousePostion.x} cy={mousePostion.y} r={circleRadius} />
    </svg>
  );
}

export default App;
