import SearchHero from "@/containers/SearchHero/SearchHero";
import { Box } from "@chakra-ui/react";

import { NextPage } from "next";
import NextHead from "next/head";

const SearchHeroPage: NextPage = (): JSX.Element => {
  return (
    <>
      <NextHead>
        <meta charSet="UTF-8" />
        <title>Mobile Legends</title>
        <meta name="description" content="micro services" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
      </NextHead>
      <Box
        bg="url(bgml.jpg)"
        bgSize="cover"
        bgPos="center"
      >
        <SearchHero />
      </Box>
    </>
  );
};
export default SearchHeroPage;
