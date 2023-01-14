import "./App.css";

const width = 960;
const height = 500;
const strokeWidth = 10;
const centerX = width / 2;
const centerY = height / 2;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;

function App() {
  return (
    <svg width={width} height={height}>
      <circle
        r={centerY - strokeWidth / 2}
        cx={centerX}
        cy={centerY}
        fill="yellow"
        stroke="black"
        stroke-width={strokeWidth}
      ></circle>
      <circle
        r={eyeRadius}
        cx={centerX - eyeOffsetX}
        cy={centerY - eyeOffsetY}
      ></circle>
      <circle
        r={eyeRadius}
        cx={centerX + eyeOffsetX}
        cy={centerY - eyeOffsetY}
      ></circle>
    </svg>
  );
}

export default App;
