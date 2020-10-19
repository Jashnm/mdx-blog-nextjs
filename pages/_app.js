import "../styles/globals.css";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import MDXProvider from "../components/MDXProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
