import { useState, useEffect } from "react";
import { arc, csv, pie } from "d3";
import "./App.css";

const csvUrl =
  "https://gist.githubusercontent.com/nabil404/48e402a70303bb711f0fbbf1849f099f/raw/css_named_colors%2520.csv";

const width = 960;
const height = 560;
const pieArc = arc().innerRadius(0).outerRadius(width);

const centerX = width / 2;
const centerY = height / 2;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then((data) => setData(data));
  }, []);

  if (!data) {
    return <pre>Loading</pre>;
  }

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {pie()
          .value(1)(data)
          .map((d) => (
            <path fill={d.data["RGB hex value"]} d={pieArc(d)} />
          ))}
        {/* {data.map((d, index) => (
          <path
            fill={d["RGB hex value"]}
            d={pieArc({
              startAngle: (index / data.length) * 2 * Math.PI,
              endAngle: ((index + 1) / data.length) * 2 * Math.PI,
            })}
          />
        ))} */}
      </g>
    </svg>
  );
}

export default App;
