import MemeGenerator from "@/containers/MemeGenerator/MemeGenerator";
import { Box } from "@chakra-ui/react";

import { NextPage } from "next";
import NextHead from "next/head";


const MemeGeneratorPage: NextPage = (): JSX.Element => {
  return (
    <>
      <NextHead>
        <meta charSet="UTF-8" />
        <title>Meme Generator</title>
        <meta name="description" content="micro services" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
      </NextHead>
      <Box bg="darkorchid" bgSize="cover" bgPos="center" h="100vh">
        <MemeGenerator />
      </Box>
    </>
  );
};
export default MemeGeneratorPage;
