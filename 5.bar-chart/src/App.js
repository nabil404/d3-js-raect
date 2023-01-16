import "./App.css";
import { useData } from "./useData";

import BarChart from "./BarChart";

const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 200 };

function App() {
  const data = useData();

  if (!data) {
    return <pre>Loading</pre>;
  }

  return <BarChart data={data} width={width} height={height} margin={margin} />;
}

export default App;
