import { PizzaContextProvider } from "../context/PizzaContext";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <PizzaContextProvider>
      <Component {...pageProps} />
    </PizzaContextProvider>
  );
}

export default MyApp;
