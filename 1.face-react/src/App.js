import { range } from "d3";
import "./App.css";
import Face from "./Face/index";

const width = 150;
const height = 150;

const faces = range(12);

function App() {
  return faces.map(() => (
    <Face
      key={Math.random()}
      width={width}
      height={height}
      strokeWidth={10}
      centerX={width / 2}
      centerY={height / 2}
      eyeOffsetX={30}
      eyeOffsetY={30}
      eyeRadius={10}
      mouthWidth={10}
      mouthRadius={40}
    />
  ));
}

export default App;
