import { useState, useEffect } from "react";
import { csv } from "d3";
import "./App.css";

const csvUrl =
  "https://gist.githubusercontent.com/nabil404/48e402a70303bb711f0fbbf1849f099f/raw/css_named_colors%2520.csv";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then((data) => setData(data));
  }, []);

  if (!data) {
    return <pre>Loading</pre>;
  }

  return data.map((d) => (
    <div
      key={Math.random()}
      style={{ background: d["RGB hex value"], width: "100vw", height: "50px" }}
    ></div>
  ));
}

export default App;
