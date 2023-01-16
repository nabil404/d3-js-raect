function Marks({ data, xScale, yScale, xValue, yValue }) {
  return data.map((d) => (
    <rect
      className="mark"
      key={Math.random()}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    />
  ));
}

export default Marks;
