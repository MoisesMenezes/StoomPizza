import { Header } from "../components/Header";
import { PizzaContextProvider } from "../context/PizzaContext";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <PizzaContextProvider>
      <Header />
      <Component {...pageProps} />
    </PizzaContextProvider>
  );
}

export default MyApp;
