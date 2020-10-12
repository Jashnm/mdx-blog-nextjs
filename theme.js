import { roboto } from "@theme-ui/presets";

const theme = {
  ...roboto,

  containers: {
    page: {
      width: "98%",
      maxWidth: "840px",
      m: 0,
      mx: "auto",
      justifyContent: "center",
      height: "100%",
      py: "1rem",
      px: ["0.4rem", "2rem"],
    },

    postCard: {
      p: "2",
      borderRadius: "4px",
      border: "1px solid #eeeeee",
      width: "100%",
    },
  },

  text: {
    heading: {
      py: "0.4rem",
    },
  },
};

export default theme;
