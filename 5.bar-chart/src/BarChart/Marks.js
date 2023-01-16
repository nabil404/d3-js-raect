import { format } from "d3";

function Marks({ data, xScale, yScale, xValue, yValue }) {
  return data.map((d) => (
    <rect
      className="mark"
      key={Math.random()}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    >
      <title>{format(".2s")(xValue(d)).replace("G", "B")}</title>
    </rect>
  ));
}

export default Marks;
