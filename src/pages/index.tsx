import Home from "@/containers/Home/Home";
import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import NextHead from "next/head";

const HomePage: NextPage = (): JSX.Element => {
  return (
    <>
      <NextHead>
        <meta charSet="UTF-8" />
        <title>Micro Services</title>
        <meta name="description" content="micro services" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
      </NextHead>
      <Box bg=' linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)'>
        <Home />
      </Box>
    </>
  );
};

export default HomePage;
