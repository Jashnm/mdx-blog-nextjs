/** @jsx jsx */
import { Button, jsx } from "theme-ui";

const MyButton = ({ text, check }) => {
  return (
    <Button sx={{ width: "100%", bg: check ? "steelblue" : "coral", my: 2 }}>
      {text}
    </Button>
  );
};

export default MyButton;
