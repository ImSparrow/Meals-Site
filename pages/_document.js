import Document, { Html, Head, Main, NextScript } from "next/document";
import { FoodContextProvider } from "../store/api";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
            <div id="portal" />
            <div id="info" />
            <Main />

            <NextScript />
        </body>
      </Html>
    );
  }
}
