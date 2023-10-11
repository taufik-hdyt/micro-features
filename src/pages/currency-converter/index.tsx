import CurrencyConverter from "@/containers/CurrencyConverter/CurrencyConverter"
import { Box } from "@chakra-ui/react";
import { NextPage } from "next"
import NextHead from "next/head";

const CurrencyConverterPage: NextPage = ():JSX.Element => {
  return (
    <>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>Currency Converter</title>
      <meta name="description" content="micro services" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
        key="viewport"
      />
    </NextHead>
    <Box bg="darkslategrey" bgSize="cover" bgPos="center" h="100vh">
      <CurrencyConverter />
    </Box>
  </>
  )
}

export default CurrencyConverterPage