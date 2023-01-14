import { useState, useEffect } from "react";
import { csv, csvFormat } from "d3";
import "./App.css";

const csvUrl =
  "https://gist.githubusercontent.com/nabil404/48e402a70303bb711f0fbbf1849f099f/raw/css_named_colors%2520.csv";

const message = (data) => {
  let message = "";
  message += Math.round(csvFormat(data).length / 1024) + " kb\n";
  message += data.length + " rows\n";
  message += data.columns.length + " columns";
  return message;
};

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then((data) => setData(message(data)));
  }, []);

  return <pre>Data is {data ? data : "loading..."}</pre>;
}

export default App;
