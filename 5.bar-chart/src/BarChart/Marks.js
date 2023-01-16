function Marks({ data, xScale, yScale }) {
  return data.map((d) => (
    <rect
      key={Math.random()}
      x={0}
      y={yScale(d.Country)}
      width={xScale(d.Population)}
      height={yScale.bandwidth()}
    />
  ));
}

export default Marks;
