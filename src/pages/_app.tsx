import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import {Poppins} from 'next/font/google'

const poppins = Poppins({weight:['400', '500','600',"700"], subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main className={poppins.className}>
      <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
