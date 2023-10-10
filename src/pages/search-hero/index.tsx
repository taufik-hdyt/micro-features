import SearchHero from "@/containers/SearchHero/SearchHero";

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
      <SearchHero />
    </>
  );
};
export default SearchHeroPage;
