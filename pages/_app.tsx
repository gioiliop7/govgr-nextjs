import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["greek", "latin", "greek-ext"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
