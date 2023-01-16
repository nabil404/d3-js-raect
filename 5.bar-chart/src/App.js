import "./App.css";
import { useData } from "./useData";

import BarChart from "./BarChart";

const width = 1080;
const height = 500;
const margin = { top: 40, right: 40, bottom: 60, left: 300 };

function App() {
  const data = useData();

  if (!data) {
    return <pre>Loading</pre>;
  }

  return <BarChart data={data} width={width} height={height} margin={margin} />;
}

export default App;
