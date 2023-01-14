function Eyes({ eyeRadius, eyeOffsetX, eyeOffsetY }) {
  return (
    <>
      <circle r={eyeRadius} cx={-eyeOffsetX} cy={-eyeOffsetY}></circle>
      <circle r={eyeRadius} cx={eyeOffsetX} cy={-eyeOffsetY}></circle>
    </>
  );
}

export default Eyes;
