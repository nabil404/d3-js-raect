import BackgroundCircle from "./BackGroundCircle";
import Eyes from "./Eyes";
import FaceContainer from "./FaceContainer";
import Mouth from "./Mouth";

function Face({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthWidth,
  mouthRadius,
}) {
  return (
    <FaceContainer
      centerX={centerX}
      centerY={centerY}
      width={width}
      height={height}
    >
      <BackgroundCircle
        radius={centerY - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes
        eyeRadius={eyeRadius}
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
      />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </FaceContainer>
  );
}

export default Face;
