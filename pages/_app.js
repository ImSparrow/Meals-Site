import "../styles/globals.css";
import Navigation from "../components/UI/Navigation";
import { FoodContextProvider } from "../store/api";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <FoodContextProvider>
        <Navigation></Navigation>
        <Component {...pageProps} />
      </FoodContextProvider>
    </>
  );
}

export default MyApp;
