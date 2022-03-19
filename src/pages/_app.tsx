import NavBar from "@components/nav-bar";
import { AppProps, NextWebVitalsMetric } from "next/app";
import { ThemeProvider } from "src/providers/ThemeProvider";
import "../styles/animations.scss";
import "../styles/globals.scss";
import "../styles/variables.globals.scss";
import Footer from "@components/Footer/Footer"

const reportWebVitals = (metric: NextWebVitalsMetric) => {
  console.log(metric);
};

const CountryFind = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  );
};

export { reportWebVitals };
export default CountryFind;
