function AxisBottom({ xScale, innerHeight }) {
  return xScale.ticks().map((t) => (
    <g key={t} transform={`translate(${xScale(t)}, 0)`}>
      <line y2={innerHeight} stroke="black" />
      <text y={innerHeight + 3} style={{ textAnchor: "middle" }} dy=".71em">
        {t}
      </text>
    </g>
  ));
}
export default AxisBottom;
