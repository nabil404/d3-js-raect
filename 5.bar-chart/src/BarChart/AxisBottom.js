function AxisBottom({ xScale, innerHeight, tickFormat }) {
  return xScale.ticks().map((t) => (
    <g className="tick" key={t} transform={`translate(${xScale(t)}, 0)`}>
      <line y2={innerHeight} stroke="black" />
      <text y={innerHeight + 3} style={{ textAnchor: "middle" }} dy=".71em">
        {tickFormat(t)}
      </text>
    </g>
  ));
}
export default AxisBottom;
