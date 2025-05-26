import { Svg, Path } from "@react-pdf/renderer";

function PhoneIcon() {
  return (
    <Svg fill="black" width="16px" height="16px" viewBox="0 0 24 24">
      <Path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.59 6.59l1.27-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.58 2.34.7A2 2 0 0 1 22 16.92z" />
    </Svg>
  );
}

export default PhoneIcon;
