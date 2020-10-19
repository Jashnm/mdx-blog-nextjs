/** @jsx jsx */
import { jsx } from "theme-ui";

const MyBackground = ({ children }) => {
  return <div sx={{ bg: "cornsilk", py: 1 }}>{children}</div>;
};

export default MyBackground;
