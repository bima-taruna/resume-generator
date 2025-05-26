import { Svg, Path } from "@react-pdf/renderer";

function LinkIcon() {
  return (
    <Svg fill="black" width="16px" height="16px" viewBox="0 0 24 24">
      <Path d="M10.59 13.41a1.996 1.996 0 0 1 0-2.82l3.18-3.18a2 2 0 1 1 2.83 2.83l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06a4 4 0 1 0-5.66-5.66l-3.18 3.18a4 4 0 0 0 0 5.66 1 1 0 1 0 1.41-1.41zm2.82-2.82a1.996 1.996 0 0 1 0 2.82l-3.18 3.18a2 2 0 1 1-2.83-2.83l1.06-1.06a1 1 0 0 0-1.41-1.41l-1.06 1.06a4 4 0 1 0 5.66 5.66l3.18-3.18a4 4 0 0 0 0-5.66 1 1 0 1 0-1.41 1.41z" />
    </Svg>
  );
}

export default LinkIcon;
