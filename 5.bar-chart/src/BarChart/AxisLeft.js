function AxisLeft({ yScale }) {
  return yScale.domain().map((t) => (
    <g className="tick">
      <text
        key={t}
        dy=".32em"
        x={-9}
        style={{ textAnchor: "end" }}
        y={yScale(t) + yScale.bandwidth() / 2}
      >
        {t}
      </text>
    </g>
  ));
}

export default AxisLeft;
